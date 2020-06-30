import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LucianoPage } from './luciano.page';

describe('LucianoPage', () => {
  let component: LucianoPage;
  let fixture: ComponentFixture<LucianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucianoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LucianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
