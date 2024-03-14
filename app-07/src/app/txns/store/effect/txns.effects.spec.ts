import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TxnsEffects } from './txns.effects';

describe('TxnsEffects', () => {
  let actions$: Observable<any>;
  let effects: TxnsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TxnsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TxnsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
