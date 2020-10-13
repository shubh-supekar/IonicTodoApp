import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiTestPage } from './api-test.page';

describe('ApiTestPage', () => {
  let component: ApiTestPage;
  let fixture: ComponentFixture<ApiTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
