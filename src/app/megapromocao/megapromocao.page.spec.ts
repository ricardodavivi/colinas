import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MegapromocaoPage } from './megapromocao.page';

describe('MegapromocaoPage', () => {
  let component: MegapromocaoPage;
  let fixture: ComponentFixture<MegapromocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegapromocaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MegapromocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
