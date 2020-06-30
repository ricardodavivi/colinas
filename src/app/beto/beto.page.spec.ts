import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BetoPage } from './beto.page';

describe('BetoPage', () => {
  let component: BetoPage;
  let fixture: ComponentFixture<BetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
