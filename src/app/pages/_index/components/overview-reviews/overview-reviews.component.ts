import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IReview} from '../../../../interfaces/iReview';
import {ModalService} from '../../services/modal.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import IPage from '../../../../interfaces/iPage';
import {IModalAddReview} from '../../../../interfaces/iModalAddReview';
import {LanguageGuardService} from '../../../../language-guard.service';
import {ReCaptcha2Component} from 'ngx-captcha';
import {HttpClient} from '@angular/common/http';
import {IReviewPage} from '../../../../interfaces/iReviewPage';

@Component({
  selector: 'app-overview-reviews',
  templateUrl: './overview-reviews.component.html',
  styleUrls: ['./overview-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewReviewsComponent implements OnInit {
  public reviewsPage: IPage<IReviewPage>;
  public reviews: Array<IReview>;
  public index: number = 0;
  public reviewForm: FormGroup;
  private modalReview: IPage<IModalAddReview>;
  public lang: string;
  public explanation: Array<string>;
  public nameControl: FormControl = new FormControl();
  public emailControl: FormControl = new FormControl('', Validators.email);
  public reviewControl: FormControl = new FormControl();
  public recaptchaControl: FormControl = new FormControl('', Validators.required);
  public isSubmitting: boolean;
  public errorObj: any = {};
  public addReviewText: string;
  public noReviewText: string;
  public anonText: string;

  @ViewChild('modalAddReview') private modalAddReviewRef: TemplateRef<any>;
  @ViewChild('modalAddReviewMessage') private modalAddReviewMessageRef: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private modalService: ModalService,
              private formBuilder: FormBuilder,
              private languageGuardService: LanguageGuardService,
              private changeDetectorRef: ChangeDetectorRef,
              private httpClient: HttpClient) {
  }

  openModal(tpl: TemplateRef<any>) {
    this.modalService.openModal('review', tpl, this.modalReview);
  }

  ngOnInit() {
    this.reviewsPage = this.route.snapshot.data.pageBlocks[0].find((page: IPage<any>) => page.entityId === 'review');
    this.modalReview = this.route.snapshot.data.pageBlocks[0].find((page: IPage<any>) => page.entityId === '[modal] review');
    this.lang = this.languageGuardService.selectedLang;
    this.explanation = (this.modalReview.pageData as IModalAddReview).explanation.split('\n');
    this.addReviewText = (this.reviewsPage.pageData as IReviewPage).submit;
    this.noReviewText = (this.reviewsPage.pageData as IReviewPage).noReviews;
    this.anonText = (this.reviewsPage.pageData as IReviewPage).anon;

    delete (this.reviewsPage.pageData as IReviewPage).submit;
    delete (this.reviewsPage.pageData as IReviewPage).noReviews;
    delete (this.reviewsPage.pageData as IReviewPage).anon;

    this.reviews = [];

    for (let i in this.reviewsPage.pageData) {
      if (this.reviewsPage.pageData.hasOwnProperty(i)) {
        (this.reviewsPage.pageData as any)[i].review = (this.reviewsPage.pageData as any)[i].review.split('\n');
        this.reviews.push((this.reviewsPage.pageData as any)[i])
      }
    }

    this.reviewForm = this.formBuilder.group({
      name: this.nameControl,
      email: this.emailControl,
      review: this.reviewControl,
      recaptcha: this.recaptchaControl
    });
  }

  handleExpire() {
    this.changeDetectorRef.markForCheck();
  }

  handleSuccess($event) {
    this.changeDetectorRef.markForCheck();
  }

  submit(form: FormGroupDirective, captchaElement: ReCaptcha2Component) {
    this.httpClient.post('review',
      {
        ...form.value,
        language: this.languageGuardService.selectedLang
      }
    ).subscribe((data: any) => {
      this.isSubmitting = false;
      this.modalService.closeModal('review', 'success', form.value);
      this.modalService.openModal('review', this.modalAddReviewMessageRef, {header: data.h, text: data.m});
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.changeDetectorRef.markForCheck();
    }, (err: any) => {
      this.isSubmitting = false;
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.errorObj.review = err.error.m;
      this.changeDetectorRef.markForCheck();
    });
  }
}
