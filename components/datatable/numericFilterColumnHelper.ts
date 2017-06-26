import {Injectable} from "@angular/core";
import {Column, HeaderColumnGroup} from "../common/shared";

@Injectable()
export class NumericFilterColumnHelper {

    public static MAX_INT_VALUE = 2147483647;

    isNumericFilterNotValid(filterValue: any, column: Column) {
        if(column.filterType === 'number' && filterValue != "") {
            if (isNaN(Number(filterValue))) {
                return true;
            }

            if(!column.filterAllowDecimals) {
                let valueParts = (filterValue + "").split(".");
                if (valueParts[1] && valueParts[1] != "") {
                    return true;
                }
            }

            if((column.filterNumericMaxValue != undefined ? filterValue > column.filterNumericMaxValue : false ) || filterValue > NumericFilterColumnHelper.MAX_INT_VALUE) {
                return true;
            }

            if((column.filterNumericMinValue != undefined ? filterValue < column.filterNumericMinValue : false) || filterValue < 0) {
                return true;
            }
        }
        return false;
    }

    changeColumnSortSetting(columnsDictionary, sortInitialSettings, globalSortingEnabled: boolean) {
        for(let prop in columnsDictionary) {
            if(!columnsDictionary.hasOwnProperty(prop)) {
                continue;
            }
            columnsDictionary[prop].sortable = globalSortingEnabled && sortInitialSettings[prop];
        }
    }

    changeHeaderColumnGroupSortSetting(headerColumnGroup: HeaderColumnGroup, sortInitialSettings, globalSortingEnabled: boolean) {
        headerColumnGroup.rows.forEach(row => {
            row.columns.forEach(column => {
                column.sortable = globalSortingEnabled && sortInitialSettings[column.field];
            });
        });
    }

    setFilterInputInHeaderColumnGroup(headerColumnGroup: HeaderColumnGroup, prop: string, filterInputNotValid: boolean) {
        headerColumnGroup.rows.forEach(row => {
            let columnFound = row.columns.find(column => column.field == prop);
            if(columnFound) {
                columnFound.isFilterInputNotValid = filterInputNotValid;
            }
        });
    }
}
