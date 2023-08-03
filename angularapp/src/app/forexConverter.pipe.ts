import { PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
@pipe
export class forexConverter implements PipeTransform{
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
    
}