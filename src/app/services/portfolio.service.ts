import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { PortfolioData } from "../models/portfolio.models";

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private portfolioData = new BehaviorSubject<PortfolioData | null>(null);
    public portfolioData$ = this.portfolioData.asObservable();
    constructor(private http: HttpClient) {
        this.loadPortfolioData();
    }

    private loadPortfolioData(): void {
        this.http.get<PortfolioData>('assets/data/portfolio-data.json').subscribe({
            next: (data) => {
                this.portfolioData.next(data);
            },
            error: (error) => {
                console.error('Error loading portfolio data:', error);
            }
        });
    }

    getPortfolioData(): Observable<PortfolioData | null> {
        return this.portfolioData$;
    }

    getCurrentPortfolioData(): PortfolioData | null {
        return this.portfolioData.value;
    }
}