import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {
    private readonly baseURL = '/api/'; // = 'www.speedacm.org/api/';
    private readonly HomeURL = 'Home/';
    private readonly ActivitiesURL = 'Activities/';
    private readonly OfficerURL = 'Officers/';
    private readonly PoliciesURL = 'Policies/';
    private readonly NotesURL = 'Notes/';
    private readonly SigsURL = 'Sigs/';

    constructor(private http: HttpClient) { }

    // Home
    public AcmLogo = () => this.http.get<Activity>(this.baseURL + this.HomeURL + 'logo');
    public OrgInfo = () => this.http.get<Activity>(this.baseURL + this.HomeURL + 'orginfo');

    // Activities
    public AllActivities = () => this.http.get<Activity[]>(this.baseURL + this.ActivitiesURL + 'all');
    public ActivityByName = (name: string) => this.http.get<Activity>(this.baseURL + this.ActivitiesURL + 'name/' + name);

    // Officers
    public AllOfficers = () => this.http.get<Officer[]>(this.baseURL + this.OfficerURL + 'all');
    public AllPolicies = () => this.http.get<Policy[]>(this.baseURL + this.PoliciesURL + 'all');

    // Policies
    public PolicyByName = (name: string) => this.http.get<Policy>(this.baseURL + this.PoliciesURL + 'name/' + name);

    // Notes
    public AllMeetingNotes = () => this.http.get<MeetingNotes[]>(this.baseURL + this.NotesURL + 'all');
    public MeetingNotesByName = (name: string) => this.http.get<MeetingNotes>(this.baseURL + this.NotesURL + 'name/' + name);

    // Sigs
    public AllSigInfo = () => this.http.get<SigInfo[]>(this.baseURL + this.SigsURL + 'all');
    public SigInfoByName = (name: string) => this.http.get<SigInfo>(this.baseURL + this.SigsURL + 'name/' + name);

}
