import {Component, OnInit} from "@angular/core";
import {Car} from "../domain/car";
import {SelectItem} from "../../../components/common/api";
import {CarService} from "../service/carservice";
import {LazyLoadEvent} from "../../../components/common/api";

@Component({
    templateUrl: 'showcase/demo/datatable/datatablefilterdemo.html'
})
export class DataTableFilterDemo implements OnInit {

    totalRecords: number;
    cars: Car[];
    brands: SelectItem[] = [];
    defaultBrand: SelectItem = {label:'VW', value:'VW'};

    constructor(private carService: CarService) {}

    ngOnInit() {
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

    addBrandIfNotExists(item:SelectItem):void {
      let found = this.brands.some(function (elem:SelectItem) {
        return elem.label === item.label && elem.value === item.value ;
      });
      if (!found) { 
        this.brands.push(item); 
      }
    }
}