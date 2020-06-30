import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RogattePage } from './rogatte.page';

describe('RogattePage', () => {
  let component: RogattePage;
  let fixture: ComponentFixture<RogattePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RogattePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RogattePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
