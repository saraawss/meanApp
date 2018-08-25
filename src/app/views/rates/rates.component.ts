import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective, BsModalService  } from 'ngx-bootstrap/modal';

import { HttpClient } from '@angular/common/http';
import * as defaultConfig from '../../config/default.config';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'rates.component.html'
})

export class RatesComponent implements OnInit {


	public ratesBd =  {
    			number: 0,
    			hours: 0,
    			days: 0,
    			hourlyrate: 0,
    			total: 0,
    			rateid: 0
    		};
    		
    public ratesLib =  {
    			description: '',
    			unit: 0,
    			unitcost: 0
    		};
    		
	rates: any;
	bd: any;
	
	@ViewChild('setBdModal') public setBdModal: ModalDirective;
	@ViewChild('rateCreateModal') public rateCreateModal: ModalDirective;
	
    constructor(private http: HttpClient , private router: Router) { }
    
    setRateBdd(rate){
    		console.log(rate.Bd);
    		
    		if(rate.Bd){
	    		this.ratesBd = {
	    			number: rate.Bd.number,
	    			hours: rate.Bd.hours,
	    			days: rate.Bd.days,
	    			hourlyrate: rate.Bd.hourlyrate,
	    			total: rate.Bd.total,
	    			rateid: rate._id
	    		};
    		}else{
    			this.ratesBd = {
	    			number: null,
	    			hours: null,
	    			days: null,
	    			hourlyrate: null,
	    			total: 0,
	    			rateid: rate._id
	    		};
    		}
    		
    		this.setBdModal.show();
    
    }
    
    saveRate() {
	    this.http.post(defaultConfig.apiurl + 'rate', this.ratesLib)
	      .subscribe(res => {
	      	  this.clearForm();
	      	  this.loadRates();
	      	  this.rateCreateModal.hide();
	      	  
	        }, (err) => {
	          console.log(err);
	        }
	      );
  	}
  	
  	saveBd() {
	    this.http.post(defaultConfig.apiurl + 'bd/'+this.ratesBd.rateid, this.ratesBd)
	      .subscribe(res => {
	      
	      	  this.loadRates();
	          this.setBdModal.hide();
	          
	        }, (err) => {
	          console.log(err);
	        }
	      );
  	}
  
  
	ngOnInit(){
		this.loadRates();
    }
	
	
	loadRates(){
		this.http.get(defaultConfig.apiurl + 'rate').subscribe(data => {
   			this.rates = data;
    	});
	}
	
	calculateBdTotal(){
	    this.ratesBd.total = this.ratesBd.number * this.ratesBd.days * this.ratesBd.hours * this.ratesBd.hourlyrate ;
		return this.ratesBd.total;
	}
	
	clearForm(){
		this.ratesLib =  {
	    			description: '',
	    			unit: 0,
	    			unitcost: 0
	    		};
	}

}
