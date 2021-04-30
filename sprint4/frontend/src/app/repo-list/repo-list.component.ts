import { Component, OnInit } from '@angular/core';

interface ReposName {
  value: string;
  flag: boolean;
}

export interface ReposInfo {
  name: string;
  url: string;
  totalCommit: number;
  totalIssue: number;
}

const reposInfo: ReposInfo[] = [
  {url: '1', name: 'Competitors', totalCommit: 1.0079, totalIssue: 509},
  {url: '2', name: 'Competitors', totalCommit: 4.0026, totalIssue: 567},
  {url: '3', name: 'Competitors', totalCommit: 6.941, totalIssue: 456},
  {url: '4', name: 'Competitors', totalCommit: 9.0122, totalIssue: 264},
  {url: '5', name: 'Competitors', totalCommit: 11.811, totalIssue: 123},
  {url: '6', name: 'Competitors', totalCommit: 12.0107, totalIssue: 647},
  {url: '7', name: 'Competitors', totalCommit: 15.0067, totalIssue: 342},
  {url: '8', name: 'Competitors', totalCommit: 16.9994, totalIssue: 856},
  {url: '9', name: 'Competitors', totalCommit: 18.914, totalIssue: 354},
  {url: '10', name: 'Competitors', totalCommit: 29.1797, totalIssue: 234},
];

const reposInfo1: ReposInfo[] = [
  {url: '1', name: 'Alpha', totalCommit: 1.324, totalIssue: 403},
  {url: '2', name: 'Alpha', totalCommit: 3.456, totalIssue: 521},
  {url: '3', name: 'Alpha', totalCommit: 7.778, totalIssue: 443},
  {url: '4', name: 'Alpha', totalCommit: 8.012, totalIssue: 112},
  {url: '5', name: 'Alpha', totalCommit: 11.811, totalIssue: 231},
  {url: '6', name: 'Alpha', totalCommit: 14.67, totalIssue: 543},
  {url: '7', name: 'Alpha', totalCommit: 15.24, totalIssue: 231},
  {url: '8', name: 'Alpha', totalCommit: 15.9994, totalIssue: 321},
  {url: '9', name: 'Alpha', totalCommit: 17.84, totalIssue: 678},
  {url: '10', name: 'Alpha', totalCommit: 20.1797, totalIssue: 854},
  {url: '11', name: 'Alpha', totalCommit: 23.327, totalIssue: 321},
];

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  reposName: ReposName[] = [
    {value: 'Competitors', flag: true},
    {value: 'Alpha', flag: false}
  ];

  flag1 = true;
  displayedColumns: string[] = ['url', 'name', 'totalCommit', 'totalIssue'];
  dataSource = reposInfo;
  dataSource1 = reposInfo1;
  constructor() { }

  ngOnInit(): void {
  }

}
