/**************************************************************************
* AngularJS-nvD3, v0.0.8; MIT License; 06/11/2014 23:23
* http://krispo.github.io/angular-nvd3
**************************************************************************/


    angular.module('nvd3', [])

        .directive('nvd3', [function(){
            return {
                restrict: 'AE',
                scope: {
                    data: '=',      //chart data, [required]
                    options: '=',   //chart options, according to nvd3 core api, [required]
                    api: '=?',      //directive global api, [optional]
                    events: '=?',   //global events that directive would subscribe to, [optional]
                    config: '=?'    //global directive configuration, [optional]
                },
                link: function(scope, element, attrs){
                    var chart,
                        defaultConfig = { extended: false, visible: true, disabled: false, autorefresh: true };

                    //basic directive configuration
                    scope._config = angular.extend(defaultConfig, scope.config);

                    //directive global api
                    scope.api = {
                        // Fully refresh directive
                        refresh: function(){
                            scope.api.updateWithOptions(scope.options);
                        },

                        // Update chart with new options
                        updateWithOptions: function(options){
                            // Clearing
                            scope.api.clearElement();

                            // Exit if options are not yet bound
                            if (angular.isDefined(options) === false) return;

                            // Exit if chart is hidden
                            if (!scope._config.visible) return;

                            // Initialize chart with specific type
                            chart = nv.models[options.chart.type]();

                            angular.forEach(chart, function(value, key){
                                if (key === 'options');

                                else if (key === 'dispatch') {
                                    if (options.chart[key] === undefined || options.chart[key] === null) {
                                        if (scope._config.extended) options.chart[key] = {};
                                    }
                                    configureEvents(chart[key], options.chart[key]);
                                }

                                else if ([
                                    'lines',
                                    'lines1',
                                    'lines2',
                                    'bars', // TODO: Fix bug in nvd3, nv.models.historicalBar - chart.interactive (false -> _)
                                    'bars1',
                                    'bars2',
                                    'stack1',
                                    'stack2',
                                    'multibar',
                                    'discretebar',
                                    'pie',
                                    'scatter',
                                    'bullet',
                                    'sparkline',
                                    'legend',
                                    'distX',
                                    'distY',
                                    'xAxis',
                                    'x2Axis',
                                    'yAxis',
                                    'yAxis1',
                                    'yAxis2',
                                    'y1Axis',
                                    'y2Axis',
                                    'y3Axis',
                                    'y4Axis',
                                    'interactiveLayer',
                                    'controls'
                                ].indexOf(key) >= 0){
                                    if (options.chart[key] === undefined || options.chart[key] === null) {
                                        if (scope._config.extended) options.chart[key] = {};
                                    }
                                    configure(chart[key], options.chart[key], options.chart.type);
                                }

                                else if (//TODO: need to fix bug in nvd3
                                    (key ==='clipEdge' && options.chart.type === 'multiBarHorizontalChart')
                                        || (key === 'clipVoronoi' && options.chart.type === 'historicalBarChart')
                                        || (key === 'color' && options.chart.type === 'indentedTreeChart')
                                        || (key === 'defined' && (options.chart.type === 'historicalBarChart' || options.chart.type === 'cumulativeLineChart' || options.chart.type === 'lineWithFisheyeChart'))
                                        || (key === 'forceX' && (options.chart.type === 'multiBarChart' || options.chart.type === 'discreteBarChart' || options.chart.type === 'multiBarHorizontalChart'))
                                        || (key === 'interpolate' && options.chart.type === 'historicalBarChart')
                                        || (key === 'isArea' && options.chart.type === 'historicalBarChart')
                                        || (key === 'size' && options.chart.type === 'historicalBarChart')
                                        || (key === 'stacked' && options.chart.type === 'stackedAreaChart')
                                        || (key === 'values' && options.chart.type === 'pieChart')
                                        || (key === 'xScale' && options.chart.type === 'scatterChart')
                                        || (key === 'yScale' && options.chart.type === 'scatterChart')
                                        || (key === 'x' && (options.chart.type === 'lineWithFocusChart' || options.chart.type === 'multiChart'))
                                        || (key === 'y' && options.chart.type === 'lineWithFocusChart' || options.chart.type === 'multiChart')
                                    );

                                else if (options.chart[key] === undefined || options.chart[key] === null){
                                    if (scope._config.extended) options.chart[key] = value();
                                }

                                else chart[key](options.chart[key]);
                            });

                            // Update with data
                            scope.api.updateWithData(scope.data);

                            // Configure wrappers
                            configureWrapper('title');
                            configureWrapper('subtitle');
                            configureWrapper('caption');

                            // Configure styles
                            configureStyles();

                            nv.addGraph(function() {
                                // Update the chart when window resizes
                                nv.utils.windowResize(function() { chart.update(); });
                                return chart;
                            }, options.chart['callback']);
                        },

                        // Update chart with new data
                        updateWithData: function (data){
                            if (data) {
                                scope.options.chart['transitionDuration'] = +scope.options.chart['transitionDuration'] || 250;
                                // remove whole svg element with old data
                                d3.select(element[0]).select('svg').remove();

                                // Select the current element to add <svg> element and to render the chart in
                                d3.select(element[0]).append('svg')
                                    .attr('height', scope.options.chart.height)
                                    .attr('width', scope.options.chart.width)
                                    .datum(data)
                                    .transition().duration(scope.options.chart['transitionDuration'])
                                    .call(chart);
                            }
                        },

                        // Fully clear directive element
                        clearElement: function (){
                            element.find('.title').remove();
                            element.find('.subtitle').remove();
                            element.find('.caption').remove();
                            element.empty();
                            chart = null;
                        }
                    };

                    // Configure the chart model with the passed options
                    function configure(chart, options, chartType){
                        if (chart && options){
                            angular.forEach(chart, function(value, key){
                                if (key === 'dispatch') {
                                    if (options[key] === undefined || options[key] === null) {
                                        if (scope._config.extended) options[key] = {};
                                    }
                                    configureEvents(value, options[key]);
                                }
                                else if (//TODO: need to fix bug in nvd3
                                    (key === 'xScale' && chartType === 'scatterChart')
                                        || (key === 'yScale' && chartType === 'scatterChart')
                                        || (key === 'values' && chartType === 'pieChart'));
                                else if ([
                                    'scatter',
                                    'defined',
                                    'options',
                                    'axis',
                                    'rangeBand',
                                    'rangeBands'
                                ].indexOf(key) < 0){
                                    if (options[key] === undefined || options[key] === null){
                                        if (scope._config.extended) options[key] = value();
                                    }
                                    else chart[key](options[key]);
                                }
                            });
                        }
                    }

                    // Subscribe to the chart events (contained in 'dispatch')
                    // and pass eventHandler functions in the 'options' parameter
                    function configureEvents(dispatch, options){
                        if (dispatch && options){
                            angular.forEach(dispatch, function(value, key){
                                if (options[key] === undefined || options[key] === null){
                                    if (scope._config.extended) options[key] = value.on;
                                }
                                else dispatch.on(key + '._', options[key]);
                            });
                        }
                    }

                    // Configure 'title', 'subtitle', 'caption'.
                    // nvd3 has no sufficient models for it yet.
                    function configureWrapper(name){
                        if (scope.options[name] === undefined || scope.options[name] === null){
                            if (scope._config.extended) scope.options[name] = {}; else return;
                        }

                        angular.forEach(defaultWrapper(name), function(value, key){
                            if (scope.options[name][key] === undefined || scope.options[name][key] === null) {
                                if (scope._config.extended) scope.options[name][key] = value;
                            }
                        });

                        var wrapElement = angular
                            .element('<div></div>')
                            .addClass(name).addClass(scope.options[name].class)
                            .removeAttr('style')
                            .css(scope.options[name].css)
                            .text(scope.options[name].text);

                        if (scope.options[name].enable) {
                            if (name === 'title') element.prepend(wrapElement);
                            else if (name === 'subtitle') element.find('.title').after(wrapElement);
                            else if (name === 'caption') element.append(wrapElement);
                        }
                    }

                    // Add some styles to the whole directive element
                    function configureStyles(){
                        if (scope.options['styles'] === undefined || scope.options['styles'] === null){
                            if (scope._config.extended) scope.options['styles'] = {}; else return;
                        }

                        angular.forEach(defaultStyles(), function(value, key){
                            if (scope.options['styles'][key] === undefined || scope.options['styles'][key] === null) {
                                if (scope._config.extended) scope.options['styles'][key] = value;
                            }
                        });

                        angular.forEach(scope.options['styles'].classes, function(value, key){
                            value ? element.addClass(key) : element.removeClass(key);
                        });

                        element.removeAttr('style').css(scope.options['styles'].css);
                    }

                    // Default values for 'title', 'subtitle', 'caption'
                    function defaultWrapper(_){
                        switch (_){
                            case 'title': return {
                                enable: false,
                                text: 'Write Your Title',
                                class: 'h4',
                                css: {
                                    width: scope.options.chart.width + 'px',
                                    textAlign: 'center'
                                }
                            };
                            case 'subtitle': return {
                                enable: false,
                                text: 'Write Your Subtitle',
                                css: {
                                    width: scope.options.chart.width + 'px',
                                    textAlign: 'center'
                                }
                            };
                            case 'caption': return {
                                enable: false,
                                text: 'Figure 1. Write Your Caption text.',
                                css: {
                                    width: scope.options.chart.width + 'px',
                                    textAlign: 'center'
                                }
                            };
                        }
                    }

                    // Default values for styles
                    function defaultStyles(){
                        return {
                            classes: {
                                'with-3d-shadow': true,
                                'with-transitions': true,
                                'gallery': false
                            },
                            css: {}
                        };
                    }

                    // Watching on options, data, config changing
                    scope.$watch('options', function(options){ if (!scope._config.disabled && scope._config.autorefresh) scope.api.refresh(); }, true);
                    scope.$watch('data', function(data){ if (!scope._config.disabled && scope._config.autorefresh) scope.api.refresh(); }, true);
                    scope.$watch('config', function(config){
                        scope._config = angular.extend(defaultConfig, config);
                        scope.api.refresh();
                    }, true);

                    //subscribe on global events
                    angular.forEach(scope.events, function(eventHandler, event){
                        scope.$on(event, function(e){
                            return eventHandler(e, scope);
                        });
                    });
                }
            };
        }]);
