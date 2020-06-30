import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikePage } from './bike.page';

describe('BikeePage', () => {
  let component: BikePage;
  let fixture: ComponentFixture<BikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
