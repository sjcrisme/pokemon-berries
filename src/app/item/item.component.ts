import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'item-root',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  berry;
  berries = [];
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: StoreService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(param => {
      this.berry = this.store.getBerrybyId(this.route.snapshot.data.data.berryId);
      this.berries = this.store.getBerriesByNames(this.route.snapshot.data.data.berries.map(i => i.name))
          .filter(berry => berry.id !== this.berry.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
