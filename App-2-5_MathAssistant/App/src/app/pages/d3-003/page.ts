import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Shape from "d3-shape";

import { StatsBarChart, StatsPieChart } from 'src/app/data/data';

@Component({
    selector: 'app-tab-d3',
    templateUrl: 'page.html',
    styleUrls: ['page.scss']
})
export class D3003Page implements OnInit {

    title = 'D3 Barchart with Ionic 3';

    width: number;
    height: number;
    radius: number;

    margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Bar
    x: any;
    y: any;
    g: any;
    svgBar: any;

    // Pie
    arc: any;
    labelArc: any;
    labelPer: any;
    pie: any;
    color: any;
    svgPie: any;

    constructor(public router: Router) {
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }

    ngOnInit() {
        this.initBar()
        this.initAxis();
        this.drawAxis();
        this.drawBars();

        this.initPie();
    }

    initBar() {
        this.svgBar = d3.select("#canvas")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 900 500');
        this.g = this.svgBar.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    }

    initAxis() {
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(StatsBarChart.map((d) => d.company));
        this.y.domain([0, d3Array.max(StatsBarChart, (d) => d.frequency)]);
    }

    drawAxis() {
        this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x));
        this.g.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");
    }

    drawBars() {
        this.g.selectAll(".bar")
            .data(StatsBarChart)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", (d) => this.x(d.company))
            .attr("y", (d) => this.y(d.frequency))
            .attr("width", this.x.bandwidth())
            .attr("height", (d) => this.height - this.y(d.frequency));
    }


    initPie() {
        this.color = d3Scale.scaleOrdinal()
            .range(["#FFA500", "#00FF00", "#FF0000", "#6b486b", "#FF00FF", "#d0743c", "#00FA9A"]);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        
        this.labelPer = d3Shape.arc()
            .outerRadius(this.radius -80)
            .innerRadius(this.radius -80);
        
    
        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.electionP);
    
        this.svgPie = d3.select("#pieChart")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
            .append("g")
            .attr("transform", "translate(" + Math.min(this.width,this.height) / 2 + "," + Math.min(this.width,this.height) / 2 + ")");
      }
    
      drawPie() {
        let g = this.svgPie.selectAll(".arc")
            .data(this.pie(StatsPieChart))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .style("fill", (d: any) => this.color(d.data.party) );
        g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
            .attr("dy", ".35em")
            .text((d: any) => d.data.party);
    
        g.append("text").attr("transform", (d: any) => "translate(" + this.labelPer.centroid(d) + ")")
            .attr("dy", ".35em")
            .text((d: any) => d.data.electionP + "%");
      }
    
}

