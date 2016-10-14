import {Component, OnInit} from "@angular/core";
import {Car} from "../domain/car";
import {SelectItem} from "../../../components/common/api";
import {CarService} from "../service/carservice";
import {LazyLoadEvent} from "../../../components/common/api";

@Component({
    templateUrl: 'showcase/demo/datatable/datatablefilterdemo.html'
})
export class DataTableFilterDemo implements OnInit {

    datasource: Car[];
    totalRecords: number;
    cars: Car[];
    brands: SelectItem[] = [];
    defaultBrand: SelectItem = {label:'VW', value:'VW'};

    constructor(private carService: CarService) {}

    ngOnInit() {

        this.carService.getCarsLarge().then(cars => {this.datasource = cars; this.totalRecords = this.datasource.length;});
        this.carService.getCarsMedium().then(cars =>{ 
            this.cars = cars;
            this.brands = [];
            this.brands.push({label:'', value:''})
            this.cars.forEach(car => {
                let selectItem:SelectItem = {label:car.brand, value:car.brand};
                this.addBrandIfNotExists(selectItem);
            })
        });
    }

    loadCarsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        console.log(event)
        //imitate db connection over a network
        setTimeout(() => {
            this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        }, 250);
    }
    
    addBrandIfNotExists(item:SelectItem):void {
      let found = this.brands.some(function (elem:SelectItem) {
        return elem.label === item.label && elem.value === item.value ;
      });
      if (!found) { 
        this.brands.push(item); 
      }
    }
}