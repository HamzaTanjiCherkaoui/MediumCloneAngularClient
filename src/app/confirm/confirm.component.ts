import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route
      .queryParams
      .subscribe(params => {
        if (!params["doNotRedirect"])
          router.navigate(['/home']);
      });
  }

  ngOnInit() {
  }

}
