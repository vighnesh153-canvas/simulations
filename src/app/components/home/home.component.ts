import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { environment } from '../../../environments/environment';

import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  simulationComponents: {
    title: string,
    link: string,
    image: string
  }[];

  constructor(private utilityService: UtilityService) {
    const { components } = environment.simulations;
    this.simulationComponents = components;
  }

  ngOnInit(): void {
    this.utilityService.displayBackButton.next(false);
  }

  ngOnDestroy(): void {
    this.utilityService.displayBackButton.next(true);
  }

}
