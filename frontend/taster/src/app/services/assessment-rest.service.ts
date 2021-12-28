import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessment } from '../types/assessment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentRestService {

  constructor(private http: HttpClient) { }

    private assessmentUrl = 'http://localhost:8093/assessment/v1/';

    addAssessment(assessment: Assessment): Observable<Assessment> {
      return this.http.post<Assessment>(this.assessmentUrl, assessment);
    }

    getAssessment(assessmentId: number): Observable<Assessment> {
      const url = `${this.assessmentUrl}${assessmentId}`;
      return this.http.get<Assessment>(url);
    }

    updateAssessment(assessment: Assessment): Observable<Assessment> {
      const url = `${this.assessmentUrl}${assessment.assessmentId}`
      return this.http.put<Assessment>(url, assessment);
    }
}
