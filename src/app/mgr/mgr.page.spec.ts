import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MgrPage } from './mgr.page';

describe('MgrPage', () => {
  let component: MgrPage;
  let fixture: ComponentFixture<MgrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MgrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
