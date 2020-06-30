import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmporioPage } from './emporio.page';

describe('EmporioPage', () => {
  let component: EmporioPage;
  let fixture: ComponentFixture<EmporioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmporioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmporioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
