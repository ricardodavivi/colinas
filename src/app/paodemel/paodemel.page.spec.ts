import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaodemelPage } from './paodemel.page';

describe('PaodemelPage', () => {
  let component: PaodemelPage;
  let fixture: ComponentFixture<PaodemelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaodemelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaodemelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
