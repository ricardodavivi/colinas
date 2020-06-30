import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JdPage } from './jd.page';

describe('JdPage', () => {
  let component: JdPage;
  let fixture: ComponentFixture<JdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
