import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export function fadeAndSlideToLeft(duration = '1s ease', name = 'fadeAndSlideToRight') {
  return trigger(name, [
    state('invisible', style({opacity: 0, transform: 'translateX(100px)'})),
    transition('invisible => visible', [
      animate(duration)
    ])
  ]);
}


export function fade(duration = '.3s ease', states = ':enter, :leave', name = 'fade'): AnimationTriggerMetadata {
  return trigger(name, [
    state('void', style({opacity: 0})),
    state('invisible', style({opacity: 0})),
    transition(states, [
      animate(duration)
    ])
  ]);
}

export function fadeAndSlideToRight(duration = '1s ease', name = 'fadeAndSlideToRight'): AnimationTriggerMetadata {
  return trigger(name, [
    state('invisible', style({opacity: 0, transform: 'translateX(-100px)'})),
    transition('invisible => visible', [
      animate(duration)
    ])
  ]);
}
