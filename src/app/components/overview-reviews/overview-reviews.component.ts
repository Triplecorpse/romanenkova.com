import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../services/modal.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ReCaptcha2Component} from 'ngx-captcha';
import {HttpClient} from '@angular/common/http';
import {PageDataGuardService} from '../../page-data-guard.service';
import {Database} from '../../../../_interface/IMongooseSchema';
import {IReviewModal} from '../../../../_interface/IReviewModal';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-overview-reviews',
  templateUrl: './overview-reviews.component.html',
  styleUrls: ['./overview-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewReviewsComponent implements OnInit {
  public reviews: Array<Database.IReview>;
  public header: string;
  public button: string;
  public modalData: IReviewModal;

  public index: number = 0;
  public reviewForm: FormGroup;
  public lang: string;

  public nameControl: FormControl = new FormControl();
  public emailControl: FormControl = new FormControl('', Validators.email);
  public reviewControl: FormControl = new FormControl('', Validators.required);
  public recaptchaControl: FormControl = new FormControl('', Validators.required);
  public agreePP: FormControl = new FormControl('', Validators.required);

  public isSubmitting: boolean;
  public errorObj: any = {};
  public noReviewText: string;
  public anonText: string;
  public captchaKey = environment.recaptcha;

  @ViewChild('modalAddReview', {static: true}) private modalAddReviewRef: TemplateRef<any>;

  constructor(private route: ActivatedRoute,
              private modalService: ModalService,
              private formBuilder: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private httpClient: HttpClient,
              private pageDataGuardService: PageDataGuardService) {
  }

  openModal(tpl: TemplateRef<any>) {
    this.modalService.openModal('review', tpl, this.modalData);
  }

  ngOnInit() {
    const reviewBlock = this.pageDataGuardService.pageData.main.review;
    this.modalData = this.pageDataGuardService.pageData.main.reviewModal;
    this.modalData.agreepp = this.pageDataGuardService.pageData.index.agreepp;

    this.header = reviewBlock.header;
    this.button = reviewBlock.button;
    this.reviews = reviewBlock.items;

    this.lang = this.pageDataGuardService.appSettings.language;
    this.noReviewText = reviewBlock.noReviews;
    this.anonText = reviewBlock.anonymous;

    this.reviewForm = this.formBuilder.group({
      name: this.nameControl,
      email: this.emailControl,
      body: this.reviewControl,
      recaptcha: this.recaptchaControl,
      agreepp: this.agreePP
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
        language: this.pageDataGuardService.appSettings.language
      }, {params: {v: '2'}}
    ).subscribe((data: any) => {
      this.isSubmitting = false;
      this.modalService.closeModal('review', 'success', form.value);
      this.modalService.alert(data);
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.reviewForm.reset();
      this.changeDetectorRef.markForCheck();
    }, (err: any) => {
      this.isSubmitting = false;
      captchaElement.resetCaptcha();
      captchaElement.reloadCaptcha();
      this.errorObj.review = err.error.m;
      this.changeDetectorRef.markForCheck();
    });
  }

  openPP(captchaElement) {
    captchaElement.resetCaptcha();
    captchaElement.reloadCaptcha();
    this.modalService.openPrivacyPolicy('appointment', this.modalAddReviewRef, this.modalData);
  }
}
