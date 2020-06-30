import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecliderPage } from './teclider.page';

describe('TecliderPage', () => {
  let component: TecliderPage;
  let fixture: ComponentFixture<TecliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
