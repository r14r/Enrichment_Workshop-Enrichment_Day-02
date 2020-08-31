import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Format from "d3-format";
import * as d3Axia from "d3-axis";

@Component({
    selector: 'app-tab-d3',
    templateUrl: 'page.html',
    styleUrls: ['page.scss']
})
export class D3001Page implements OnInit {

    title = 'D3 Barchart with Ionic 3';

    width: number;
    height: number;
    x: any;
    y: any;
    radius: number;

    margin = { top: 20, right: 20, bottom: 30, left: 40 };

    pad: any;
    svg: any;
    vis: any;
    legend: any;
    continuous: any;

    guides: any
    y_guides: any;

    format_5f: any;

    constructor(public router: Router) {
        console.log('D3001Page::constructor | ');
        this.stacktrace();

        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;

        this.width = 760;
        this.height = 400;

        this.x = d3Scale.scaleLinear().domain([-5, 5]).range([0, this.width]);
        this.y = d3Scale.scaleLinear().domain([0, 1]).range([this.height, 0]);

        this.pad = 50;
        this.svg = d3.select("#canvas")
            .append("svg:svg")
            .attr("height", this.height + this.pad)
            .attr("width", this.width + this.pad)

        this.vis = this.svg.append("svg:g")
            .attr("transform", "translate(40,20)")

        this.legend = d3.select("body").append("div")
            .classed("legend", true)

    }

    ngOnInit() {
        console.log('D3001Page::ngOnInit | ');
        this.stacktrace();

        this.continuous = this.make_gaussian_func(-2, .7);

        this.make_rules();
        this.chart_line();
        this.make_mouseover_guides();
    }

    make_gaussian_func(mu, sigma_squared) {
        var sqrt = Math.sqrt, pow = Math.pow, e = Math.E, pi = Math.PI;
        var sigma = sqrt(sigma_squared);
        var a = 1 / (sigma * sqrt(2 * pi));
        return (function (xi) {
            return pow(a * e, - pow(xi - mu, 2) / (2 * pow(sigma, 2)))
        });
    }

    chart_line() {
        console.log('D3001Page::chart_line | ');
        this.stacktrace();
        
        var g = this.vis.append("svg:g")
            .classed("series", true)

        g.append("svg:path")
            .attr("d", function (d) {
                return this.svg.line()(
                    this.this.x.ticks(100).map(function (xi) {
                        return [this.this.x(xi), this.this.y(this.continuous(xi))]
                    })
                )
            })
    }

    update_legend_values() {
        var xi = this.x.invert(d3.mouse(this.svg)[0]);

        this.legend
            .text("this.x: " + this.format_5f(xi) + " | this.y: " + this.format_5f(this.continuous(xi)));

        this.guides
            .attr("transform", "translate(" + (this.x(xi)) + ",0)")
            .attr("visibility", "visible")

        this.y_guides
            .attr("transform", "translate(0," + this.y(this.continuous(xi)) + ")")
    }

    blank_legend_values() {
        this.legend
            .text("Mouse over the graph...")

        this.guides
            .attr("visibility", "hidden")
    }

    make_mouseover_guides() {
        this.guides = this.vis.append("svg:g").classed("guides", true)
        this.y_guides = this.guides.append("svg:g")

        this.guides
            .append("svg:line")
            .attr("y1", this.height)
        this.y_guides
            .append("svg:circle")
            .attr("r", 7)

        this.y_guides
            .append("svg:line")
            .attr("x1", -20)
            .attr("x2", +20)

        this.vis.append("svg:rect")
            .classed("mouse_area", true)
            .attr("width", this.width)
            .attr("height", this.height)
            .on("mousemove", this.update_legend_values)
            .on("mouseout", this.blank_legend_values)

        this.blank_legend_values();

        this.format_5f = d3Format.format(".5f");
    }


    make_x_axis() {
        const scale = d3Scale.scaleLinear()
            .domain([0, 1])
            .range([this.x, 0]);

        return d3Axia.axisBottom(scale);

        //    .scale(this.x)
        //    .ticks(10)
    }

    make_y_axis() {
        const scale = d3Scale.scaleLinear()
            .domain([0, 1])
            .range([this.x, 0]);

        return d3Axia.axisLeft(scale);

        //    .scale(this.y)
        //    .ticks(10)
    }

    make_rules() {
        var rules = this.vis.append("svg:g").classed("rules", true)

        rules
            .append("svg:g")
            .classed("grid x_grid", true)
            .attr("transform", "translate(0," + this.height + ")")
            .call(this.make_x_axis()
                /*
                .tickSize(-this.height, 0, 0)
                .tickFormat("")
                */
            )

        rules
            .append("svg:g")
            .classed("grid y_grid", true)
            .call(this.make_y_axis()
                /*
                .tickSize(-this.width, 0, 0)
                .tickFormat("")
                */
            )

        rules
            .append("svg:g")
            .classed("labels x_labels", true)
            .attr("transform", "translate(0," + this.height + ")")
            .call(this.make_x_axis()
                .tickSize(5)
                // .tickFormat(d3.time.format("%this.y/%m"))
            )

        rules
            .append("svg:g")
            .classed("labels y_labels", true)
            .call(this.make_y_axis()
                /*
                .tickSubdivide(1)
                .tickSize(10, 5, 0)
                */
            )
    }

    stacktrace() {
        console.log('ERROR:', (new Error()).stack.split('\n')[1].split(' '));
        console.log('ERROR:', (new Error()).stack.split('\n'));
    }
}

