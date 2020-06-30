import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocelarPage } from './docelar.page';

describe('DocelarPage', () => {
  let component: DocelarPage;
  let fixture: ComponentFixture<DocelarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocelarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocelarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
