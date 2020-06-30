import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlaviaPage } from './flavia.page';

describe('FlaviaPage', () => {
  let component: FlaviaPage;
  let fixture: ComponentFixture<FlaviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlaviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
