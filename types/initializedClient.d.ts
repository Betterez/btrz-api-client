declare const _exports: {
    constants: {
        INTERNAL_AUTH_TOKEN_SYMBOL: string;
    };
    _cleanClient: import("axios").AxiosInstance;
    inventory: {
        trips: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, id, headers }: {
                token: any;
                id: any;
                headers: any;
            }) => any;
        };
        segmentsInformationTables: {
            get: ({ token, jwtToken, routeId, query, headers }: {
                token: any;
                jwtToken: any;
                routeId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        __test_trips: {
            client: import("axios").AxiosInstance;
        };
        docs: {
            get: () => any;
        };
        customFields: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ fieldId, token, jwtToken, query, headers }: {
                fieldId: any;
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, field, headers }: {
                token: any;
                jwtToken: any;
                field: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, fieldId, field, headers }: {
                token: any;
                jwtToken: any;
                fieldId: any;
                field: any;
                headers: any;
            }) => any;
            types: {
                all({ token, headers }: {
                    token: any;
                    headers: any;
                }): any;
            };
        };
        products: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ productId, token, jwtToken, query, headers }: {
                productId: any;
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            families: {
                all: ({ token, query, headers }: {
                    token: any;
                    query?: {};
                    headers: any;
                }) => any;
            };
            domains: {
                remove: ({ token, jwtToken, domain, headers }: {
                    token: any;
                    jwtToken: any;
                    domain: any;
                    headers: any;
                }) => any;
            };
        };
        insurances: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, insurance, jwtToken, headers }: {
                token: any;
                insurance: any;
                jwtToken: any;
                headers: any;
            }) => any;
            get: ({ token, insuranceId, headers }: {
                token: any;
                insuranceId: any;
                headers: any;
            }) => any;
            update: ({ token, insurance, jwtToken, insuranceId, headers }: {
                token: any;
                insurance: any;
                jwtToken: any;
                insuranceId: any;
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, insuranceId, headers }: {
                token: any;
                jwtToken: any;
                insuranceId: any;
                headers: any;
            }) => any;
        };
        insurancesCost: {
            get: ({ token, productId, declaredValue, query, headers }: {
                token: any;
                productId: any;
                declaredValue: any;
                query?: {};
                headers: any;
            }) => any;
        };
        stations: {
            get: ({ token, id, headers }: {
                token: any;
                id: any;
                headers: any;
            }) => any;
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, stationId, station, headers }: {
                token: any;
                jwtToken: any;
                stationId: any;
                station: any;
                headers: any;
            }) => any;
        };
        stationsZones: {
            get: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        parcelZones: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, parcelZone, jwtToken, headers }: {
                token: any;
                parcelZone: any;
                jwtToken: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, parcelZoneId, parcelZone, headers }: {
                jwtToken: any;
                token: any;
                parcelZoneId: any;
                parcelZone: any;
                headers: any;
            }) => any;
        };
        countries: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        fares: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, id, headers }: {
                token: any;
                id: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, fareId, fare, headers }: {
                token: any;
                jwtToken: any;
                fareId: any;
                fare: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, fare, headers }: {
                token: any;
                jwtToken: any;
                fare: any;
                headers: any;
            }) => any;
            adjustments: {
                create({ token, jwtToken, fareId, adjustmentsOverride, headers }: {
                    token: any;
                    jwtToken: any;
                    fareId: any;
                    adjustmentsOverride: any;
                    headers: any;
                }): any;
                remove({ token, jwtToken, fareId, adjustmentId, headers }: {
                    token: any;
                    jwtToken: any;
                    fareId: any;
                    adjustmentId: any;
                    headers: any;
                }): any;
            };
        };
        promos: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ promoId, token, query, headers }: {
                promoId: any;
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ jwtToken, promo, token, headers }: {
                jwtToken: any;
                promo: any;
                token: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, promoId, update, headers }: {
                jwtToken: any;
                token: any;
                promoId: any;
                update: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, promoId, token, headers }: {
                jwtToken: any;
                promoId: any;
                token: any;
                headers: any;
            }) => any;
            addRule: ({ jwtToken, token, promoId, rule, headers }: {
                jwtToken: any;
                token: any;
                promoId: any;
                rule: any;
                headers: any;
            }) => any;
            updateRule: ({ jwtToken, token, promoId, ruleId, rule, headers }: {
                jwtToken: any;
                token: any;
                promoId: any;
                ruleId: any;
                rule: any;
                headers: any;
            }) => any;
        };
        labels: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ labelId, token, jwtToken, query, headers }: {
                labelId: any;
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ jwtToken, label, token, headers }: {
                jwtToken: any;
                label: any;
                token: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, labelId, label, headers }: {
                jwtToken: any;
                token: any;
                labelId: any;
                label: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, token, labelId, headers }: {
                jwtToken: any;
                token: any;
                labelId: any;
                headers: any;
            }) => any;
        };
        taxes: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ taxId, token, query, headers }: {
                taxId: any;
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ jwtToken, tax, token, headers }: {
                jwtToken: any;
                tax: any;
                token: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, taxId, tax, headers }: {
                jwtToken: any;
                token: any;
                taxId: any;
                tax: any;
                headers: any;
            }) => any;
            exceptions: {
                create({ jwtToken, token, taxException, headers }: {
                    jwtToken: any;
                    token: any;
                    taxException: any;
                    headers: any;
                }): any;
                update({ jwtToken, token, taxExceptionId, taxException, headers }: {
                    jwtToken: any;
                    token: any;
                    taxExceptionId: any;
                    taxException: any;
                    headers: any;
                }): any;
                get({ jwtToken, token, taxExceptionId, headers }: {
                    jwtToken: any;
                    token: any;
                    taxExceptionId: any;
                    headers: any;
                }): any;
                all({ jwtToken, token, query, headers }: {
                    jwtToken: any;
                    token: any;
                    query?: {};
                    headers: any;
                }): any;
                delete({ jwtToken, token, taxExceptionId, headers }: {
                    jwtToken: any;
                    token: any;
                    taxExceptionId: any;
                    headers: any;
                }): any;
            };
        };
        seatmaps: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ seatmapId, routeId, scheduleId, manifestDate, query, token, headers }: {
                seatmapId: any;
                routeId: any;
                scheduleId: any;
                manifestDate: any;
                query?: {};
                token: any;
                headers: any;
            }) => any;
            getById: ({ seatmapId, token, jwtToken, query, headers }: {
                seatmapId: any;
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, seatmap, headers }: {
                token: any;
                jwtToken: any;
                seatmap: any;
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, seatmapId, headers }: {
                token: any;
                jwtToken: any;
                seatmapId: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, seatmapId, seatmap, headers }: {
                token: any;
                jwtToken: any;
                seatmapId: any;
                seatmap: any;
                headers: any;
            }) => any;
        };
        fees: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, feeId, headers }: {
                token: any;
                jwtToken: any;
                feeId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, fee, headers }: {
                token: any;
                jwtToken: any;
                fee: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, feeId, fee, headers }: {
                token: any;
                jwtToken: any;
                feeId: any;
                fee: any;
                headers: any;
            }) => any;
        };
        items: {
            all: ({ token, query, jwtToken, headers }: {
                token: any;
                query?: {};
                jwtToken: any;
                headers: any;
            }) => any;
            get: ({ itemId, token, jwtToken, query, headers }: {
                itemId: any;
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ jwtToken, item, token, headers }: {
                jwtToken: any;
                item: any;
                token: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, itemId, item, headers }: {
                jwtToken: any;
                token: any;
                itemId: any;
                item: any;
                headers: any;
            }) => any;
        };
        externalPasses: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ externalPassId, token, jwtToken, headers }: {
                externalPassId: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        filteredTrips: {
            create: ({ token, jwtToken, tripSegmentsId, headers }: {
                token: any;
                jwtToken: any;
                tripSegmentsId: any;
                headers: any;
            }) => any;
        };
        filteredTripsV2: {
            create: ({ token, jwtToken, filteredTrip, headers }: {
                token: any;
                jwtToken: any;
                filteredTrip: any;
                headers: any;
            }) => any;
        };
        ssrs: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        fareClasses: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, fareClass, headers }: {
                token: any;
                jwtToken: any;
                fareClass: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, fareClassId, update, headers }: {
                token: any;
                jwtToken: any;
                fareClassId: any;
                update: any;
                headers: any;
            }) => any;
        };
        journeyPrices: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            deleteById: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            get: ({ id, token, jwtToken, query, headers }: {
                id: any;
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, journeyPrice, headers }: {
                token: any;
                jwtToken: any;
                journeyPrice: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, journeyPriceId, journeyPrice, headers }: {
                token: any;
                jwtToken: any;
                journeyPriceId: any;
                journeyPrice: any;
                headers: any;
            }) => any;
        };
        brands: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, brand, headers }: {
                token: any;
                jwtToken: any;
                brand: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, brandId, brand, headers }: {
                jwtToken: any;
                token: any;
                brandId: any;
                brand: any;
                headers: any;
            }) => any;
            get: ({ token, brandId, jwtToken, headers }: {
                token: any;
                brandId: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        banks: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ bankId, token, headers, jwtToken }: {
                bankId: any;
                token: any;
                headers: any;
                jwtToken: any;
            }) => any;
            create: ({ jwtToken, token, bank, headers }: {
                jwtToken: any;
                token: any;
                bank: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, bankId, bank, headers }: {
                jwtToken: any;
                token: any;
                bankId: any;
                bank: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, bankId, token, headers }: {
                jwtToken: any;
                bankId: any;
                token: any;
                headers: any;
            }) => any;
        };
        operatingCompanies: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, operatingCompany, headers }: {
                token: any;
                jwtToken: any;
                operatingCompany: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, operatingCompanyId, operatingCompany, headers }: {
                jwtToken: any;
                token: any;
                operatingCompanyId: any;
                operatingCompany: any;
                headers: any;
            }) => any;
            get: ({ token, operatingCompanyId, jwtToken, headers }: {
                token: any;
                operatingCompanyId: any;
                jwtToken: any;
                headers: any;
            }) => any;
            sequences: {
                create({ jwtToken, token, operatingCompanyId, sequence, headers }: {
                    jwtToken: any;
                    token: any;
                    operatingCompanyId: any;
                    sequence: any;
                    headers: any;
                }): any;
                all({ jwtToken, token, operatingCompanyId, headers }: {
                    jwtToken: any;
                    token: any;
                    operatingCompanyId: any;
                    headers: any;
                }): any;
                get({ jwtToken, token, operatingCompanyId, sequenceId, headers }: {
                    jwtToken: any;
                    token: any;
                    operatingCompanyId: any;
                    sequenceId: any;
                    headers: any;
                }): any;
                update({ jwtToken, token, operatingCompanyId, sequenceId, sequence, headers }: {
                    jwtToken: any;
                    token: any;
                    operatingCompanyId: any;
                    sequenceId: any;
                    sequence: any;
                    headers: any;
                }): any;
            };
        };
        operationMessages: {
            get: ({ token, operationMessageId, headers }: {
                token: any;
                operationMessageId: any;
                headers: any;
            }) => any;
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, opMsgData, headers }: {
                token: any;
                jwtToken: any;
                opMsgData: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, operationMessageId, opMsgData, headers }: {
                token: any;
                jwtToken: any;
                operationMessageId: any;
                opMsgData: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, operationMessageId, token, headers }: {
                jwtToken: any;
                operationMessageId: any;
                token: any;
                headers: any;
            }) => any;
            getByStation: ({ token, jwtToken, opMsgData, headers }: {
                token: any;
                jwtToken: any;
                opMsgData: any;
                headers: any;
            }) => any;
        };
        paymentTerminals: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ paymentTerminalId, token, headers }: {
                paymentTerminalId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, paymentTerminal, headers }: {
                jwtToken: any;
                token: any;
                paymentTerminal: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, paymentTerminalId, paymentTerminal, headers }: {
                jwtToken: any;
                token: any;
                paymentTerminalId: any;
                paymentTerminal: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, paymentTerminalId, token, headers }: {
                jwtToken: any;
                paymentTerminalId: any;
                token: any;
                headers: any;
            }) => any;
        };
        mitTerminals: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ mitTerminalId, token, headers }: {
                mitTerminalId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, mitTerminal, headers }: {
                jwtToken: any;
                token: any;
                mitTerminal: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, mitTerminalId, mitTerminal, headers }: {
                jwtToken: any;
                token: any;
                mitTerminalId: any;
                mitTerminal: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, mitTerminalId, token, headers }: {
                jwtToken: any;
                mitTerminalId: any;
                token: any;
                headers: any;
            }) => any;
        };
        serviceTypes: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ serviceTypeId, token, headers }: {
                serviceTypeId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, serviceType, headers }: {
                jwtToken: any;
                token: any;
                serviceType: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, serviceTypeId, serviceType, headers }: {
                jwtToken: any;
                token: any;
                serviceTypeId: any;
                serviceType: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, serviceTypeId, token, headers }: {
                jwtToken: any;
                serviceTypeId: any;
                token: any;
                headers: any;
            }) => any;
        };
        customContent: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ customContentId, token, headers }: {
                customContentId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, customContent, headers }: {
                jwtToken: any;
                token: any;
                customContent: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, customContentId, customContent, headers }: {
                jwtToken: any;
                token: any;
                customContentId: any;
                customContent: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, customContentId, token, headers }: {
                jwtToken: any;
                customContentId: any;
                token: any;
                headers: any;
            }) => any;
        };
        seatfees: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ seatfeeId, token, headers }: {
                seatfeeId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, seatfee, headers }: {
                jwtToken: any;
                token: any;
                seatfee: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, seatfeeId, seatfee, headers }: {
                jwtToken: any;
                token: any;
                seatfeeId: any;
                seatfee: any;
                headers: any;
            }) => any;
        };
        routes: {
            get: ({ routeId, token, query, headers }: {
                routeId: any;
                token: any;
                query?: {};
                headers: any;
            }) => any;
            prices: ({ token, productId, originId, destinationId, channel, query, headers }: {
                token: any;
                productId: any;
                originId: any;
                destinationId: any;
                channel: any;
                query: any;
                headers: any;
            }) => any;
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            stations: ({ token, routeId, headers }: {
                token: any;
                routeId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                headers: any;
            }) => any;
            fareTables: {
                all({ token, query, headers }: {
                    token: any;
                    query?: {};
                    headers: any;
                }): any;
                create({ token, jwtToken, routeId, fareTable, headers }: {
                    token: any;
                    jwtToken: any;
                    routeId: any;
                    fareTable: any;
                    headers: any;
                }): any;
                update({ token, jwtToken, routeId, fareTableId, fareTable, headers }: {
                    token: any;
                    jwtToken: any;
                    routeId: any;
                    fareTableId: any;
                    fareTable: any;
                    headers: any;
                }): any;
            };
            stops: {
                create({ token, jwtToken, routeId, stop, headers }: {
                    token: any;
                    jwtToken: any;
                    routeId: any;
                    stop: any;
                    headers: any;
                }): any;
            };
        };
        bareRoutes: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ routeId, token, query, headers }: {
                routeId: any;
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        schedules: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, routeId, scheduleId, headers }: {
                token: any;
                routeId: any;
                scheduleId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, routeId, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                routeId: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, data, routeId, scheduleId, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                routeId: any;
                scheduleId: any;
                headers: any;
            }) => any;
            delete: ({ token, jwtToken, routeId, scheduleId, headers }: {
                token: any;
                jwtToken: any;
                routeId: any;
                scheduleId: any;
                headers: any;
            }) => any;
            autoBouncing: {
                create: ({ token, jwtToken, data, headers }: {
                    token: any;
                    jwtToken: any;
                    data: any;
                    headers: any;
                }) => any;
                delete: ({ token, jwtToken, routeId, parentScheduleId, headers }: {
                    token: any;
                    jwtToken: any;
                    routeId: any;
                    parentScheduleId: any;
                    headers: any;
                }) => any;
            };
        };
        garages: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, garageId, headers }: {
                token: any;
                jwtToken: any;
                garageId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, garageId, data, headers }: {
                token: any;
                jwtToken: any;
                garageId: any;
                data: any;
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, garageId, headers }: {
                token: any;
                jwtToken: any;
                garageId: any;
                headers: any;
            }) => any;
        };
        serviceNumbers: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, serviceNumber, headers }: {
                token: any;
                jwtToken: any;
                serviceNumber: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, serviceNumberId, serviceNumber, headers }: {
                jwtToken: any;
                token: any;
                serviceNumberId: any;
                serviceNumber: any;
                headers: any;
            }) => any;
            get: ({ token, serviceNumberId, jwtToken, headers }: {
                token: any;
                serviceNumberId: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        companies: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        bundleFares: {
            all: ({ token, bundleId, productId, query, headers }: {
                token: any;
                bundleId: any;
                productId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        giftCertificateDefinitions: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, giftcertificateId, query, headers }: {
                token: any;
                jwtToken: any;
                giftcertificateId: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, giftcertificate, query, headers }: {
                token: any;
                jwtToken: any;
                giftcertificate: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, giftcertificateId, giftcertificate, query, headers }: {
                token: any;
                jwtToken: any;
                giftcertificateId: any;
                giftcertificate: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, giftcertificateId, query, headers }: {
                token: any;
                jwtToken: any;
                giftcertificateId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        amenities: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, amenityId, query, headers }: {
                token: any;
                amenityId: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, amenity, headers }: {
                token: any;
                jwtToken: any;
                amenity: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, amenityId, amenity, headers }: {
                token: any;
                jwtToken: any;
                amenityId: any;
                amenity: any;
                headers: any;
            }) => any;
        };
        amenityGroups: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, amenityGroupId, query, headers }: {
                token: any;
                amenityGroupId: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, amenityGroup, headers }: {
                token: any;
                jwtToken: any;
                amenityGroup: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, amenityGroupId, amenityGroup, headers }: {
                token: any;
                jwtToken: any;
                amenityGroupId: any;
                amenityGroup: any;
                headers: any;
            }) => any;
        };
        bundles: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, bundleId, headers }: {
                token: any;
                jwtToken: any;
                bundleId: any;
                headers: any;
            }) => any;
        };
        stationGroups: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        zonePrices: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ zonePriceId, token, headers }: {
                zonePriceId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, zonePrice, headers }: {
                jwtToken: any;
                token: any;
                zonePrice: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, zonePriceId, zonePrice, headers }: {
                jwtToken: any;
                token: any;
                zonePriceId: any;
                zonePrice: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, zonePriceId, token, headers }: {
                jwtToken: any;
                zonePriceId: any;
                token: any;
                headers: any;
            }) => any;
        };
        zonePriceOverages: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ zonePriceOverageId, token, headers }: {
                zonePriceOverageId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, zonePriceOverages, headers }: {
                jwtToken: any;
                token: any;
                zonePriceOverages: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, zonePriceOverageId, zonePriceOverages, headers }: {
                jwtToken: any;
                token: any;
                zonePriceOverageId: any;
                zonePriceOverages: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, zonePriceOverageId, token, headers }: {
                jwtToken: any;
                zonePriceOverageId: any;
                token: any;
                headers: any;
            }) => any;
        };
        travellerCardProviders: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, travellerCardProvider, headers }: {
                token: any;
                jwtToken: any;
                travellerCardProvider: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, travellerCardProviderId, travellerCardProvider, headers }: {
                jwtToken: any;
                token: any;
                travellerCardProviderId: any;
                travellerCardProvider: any;
                headers: any;
            }) => any;
            get: ({ token, travellerCardProviderId, jwtToken, headers }: {
                token: any;
                travellerCardProviderId: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        travellerCardProvidersTypes: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        travellerCardTypes: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, travellerCardType, headers }: {
                token: any;
                jwtToken: any;
                travellerCardType: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, travellerCardTypeId, travellerCardType, headers }: {
                jwtToken: any;
                token: any;
                travellerCardTypeId: any;
                travellerCardType: any;
                headers: any;
            }) => any;
            get: ({ token, travellerCardTypeId, jwtToken, headers }: {
                token: any;
                travellerCardTypeId: any;
                jwtToken: any;
                headers: any;
            }) => any;
            remove: ({ token, travellerCardTypeId, jwtToken, headers }: {
                token: any;
                travellerCardTypeId: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        marketplaceModifiers: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ marketplaceModifierId, token, headers }: {
                marketplaceModifierId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, marketplaceModifier, headers }: {
                jwtToken: any;
                token: any;
                marketplaceModifier: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, marketplaceModifierId, marketplaceModifier, headers }: {
                jwtToken: any;
                token: any;
                marketplaceModifierId: any;
                marketplaceModifier: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, marketplaceModifierId, token, headers }: {
                jwtToken: any;
                marketplaceModifierId: any;
                token: any;
                headers: any;
            }) => any;
        };
        healthCheck: {
            get: () => any;
        };
        maritalStatus: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, id, data, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        documentTypes: {
            all: ({ token, jwtToken, query, headers, providerId }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
                providerId: any;
            }) => any;
            get: ({ token, jwtToken, id, query, headers, providerId }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
                providerId: any;
            }) => any;
            update: ({ token, jwtToken, id, data, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        vehicles: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ vehicleId, token, headers }: {
                vehicleId: any;
                token: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, vehicle, headers }: {
                jwtToken: any;
                token: any;
                vehicle: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, vehicleId, vehicle, headers }: {
                jwtToken: any;
                token: any;
                vehicleId: any;
                vehicle: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, vehicleId, token, headers }: {
                jwtToken: any;
                vehicleId: any;
                token: any;
                headers: any;
            }) => any;
            seatmaps: {
                create({ jwtToken, token, vehicleId, seatmap, headers, newdesign }: {
                    jwtToken: any;
                    token: any;
                    vehicleId: any;
                    seatmap: any;
                    headers: any;
                    newdesign: any;
                }): any;
                remove({ jwtToken, vehicleId, seatMapId, token, headers, newdesign }: {
                    jwtToken: any;
                    vehicleId: any;
                    seatMapId: any;
                    token: any;
                    headers: any;
                    newdesign: any;
                }): any;
            };
        };
        seatClasses: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, id, data, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        segmentsInformation: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ segmentInformationId, token, headers, jwtToken }: {
                segmentInformationId: any;
                token: any;
                headers: any;
                jwtToken: any;
            }) => any;
            create: ({ jwtToken, token, segmentInformation, headers }: {
                jwtToken: any;
                token: any;
                segmentInformation: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, segmentInformationId, segmentInformation, headers }: {
                jwtToken: any;
                token: any;
                segmentInformationId: any;
                segmentInformation: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, segmentInformationId, token, headers }: {
                jwtToken: any;
                segmentInformationId: any;
                token: any;
                headers: any;
            }) => any;
        };
        mitTerminalsSettings: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ id, token, jwtToken, headers }: {
                id: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, mitTerminalSettings, headers }: {
                jwtToken: any;
                token: any;
                mitTerminalSettings: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, id, mitTerminalSettings, headers }: {
                jwtToken: any;
                token: any;
                id: any;
                mitTerminalSettings: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, id, token, headers }: {
                jwtToken: any;
                id: any;
                token: any;
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    coltrane: {
        docs: {
            get: () => any;
        };
        paths: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    accounts: {
        accounts: {
            get: ({ jwtToken, accountId, headers }: {
                jwtToken: any;
                accountId: any;
                headers: any;
            }) => any;
        };
        application: {
            get: ({ token, jwtToken, headers }: {
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        applications: {
            get: ({ token, id, jwtToken, headers }: {
                token: any;
                id: any;
                jwtToken: any;
                headers: any;
            }) => any;
            getByName: ({ token, appName, jwtToken, headers }: {
                token: any;
                appName: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        applicationSettings: {
            get: ({ token, providerId, jwtToken, query, headers }: {
                token: any;
                providerId: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ jwtToken, token, id, application, headers }: {
                jwtToken: any;
                token: any;
                id: any;
                application: any;
                headers: any;
            }) => any;
            remove: ({ jwtToken, token, id, headers }: {
                jwtToken: any;
                token: any;
                id: any;
                headers: any;
            }) => any;
            regenerateKeys: ({ jwtToken, token, id, headers }: {
                jwtToken: any;
                token: any;
                id: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, application, headers }: {
                jwtToken: any;
                token: any;
                application: any;
                headers: any;
            }) => any;
        };
        customers: {
            put: ({ customerId, customer, token, jwtToken, headers }: {
                customerId: any;
                customer: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, query, headers, providerId }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
                providerId: any;
            }) => any;
            create: ({ customer, token, jwtToken, query, headers }: {
                customer: any;
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            signIn: ({ email, password, apiKey }: {
                email: any;
                password: any;
                apiKey: any;
            }) => any;
            signInCas: ({ service, ticket, token, headers }: {
                service: any;
                ticket: any;
                token: any;
                headers: any;
            }) => any;
            update: ({ customerId, token, jwtToken, data, query, headers }: {
                customerId: any;
                token: any;
                jwtToken: any;
                data: any;
                query: any;
                headers: any;
            }) => any;
        };
        currentShifts: {
            get: ({ token, userId, query, headers }: {
                token: any;
                userId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        docs: {
            get: () => any;
        };
        domains: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ data, token, jwtToken, headers }: {
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            remove: ({ domain, token, jwtToken, headers }: {
                domain: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        emailSettings: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            getByEmail: ({ token, jwtToken, email, query, headers }: {
                token: any;
                jwtToken: any;
                email: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ data, token, jwtToken, headers }: {
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, email, data, headers }: {
                token: any;
                jwtToken: any;
                email: any;
                data: any;
                headers: any;
            }) => any;
            remove: ({ email, token, jwtToken, headers }: {
                email: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        exchangeRates: {
            allByIsoCode: ({ token, jwtToken, isoCode, query, headers }: {
                token: any;
                jwtToken: any;
                isoCode: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ data, token, jwtToken, headers }: {
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        exchangeReceipts: {
            update: ({ data, token, jwtToken, headers }: {
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, headers }: {
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        images: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, query, headers, imageId }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
                imageId: any;
            }) => any;
            create: ({ jwtToken, token, image, headers }: {
                jwtToken: any;
                token: any;
                image: any;
                headers: any;
            }) => any;
            remove: ({ imageId, token, jwtToken, headers }: {
                imageId: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        interline: {
            invitations: {
                all({ token, jwtToken, query, headers }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                }): any;
                get({ token, invitationId, headers }: {
                    token: any;
                    invitationId: any;
                    headers: any;
                }): any;
                create({ data, token, jwtToken, headers }: {
                    data: any;
                    token: any;
                    jwtToken: any;
                    headers: any;
                }): any;
                update({ invitationId, data, token, jwtToken, headers }: {
                    invitationId: any;
                    data: any;
                    token: any;
                    jwtToken: any;
                    headers: any;
                }): any;
            };
            consumers: {
                all({ token, jwtToken, query, headers }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                }): any;
            };
            providers: {
                all({ token, jwtToken, query, headers }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                }): any;
            };
            network: {
                get({ token, interlineId, headers }: {
                    token: any;
                    interlineId: any;
                    headers: any;
                }): any;
                update({ interlineId, data, token, jwtToken, headers }: {
                    interlineId: any;
                    data: any;
                    token: any;
                    jwtToken: any;
                    headers: any;
                }): any;
            };
            remove({ interlineId, token, jwtToken, headers }: {
                interlineId: any;
                token: any;
                jwtToken: any;
                headers: any;
            }): any;
        };
        lexicons: {
            all: ({ token, context, query, headers }: {
                token: any;
                context: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, lexiconEntries, headers }: {
                token: any;
                jwtToken: any;
                lexiconEntries: any;
                headers: any;
            }) => any;
            createOrUpdateMany: ({ token, jwtToken, entries, headers }: {
                token: any;
                jwtToken: any;
                entries: any;
                headers: any;
            }) => any;
            updateMany: ({ token, jwtToken, updates, headers }: {
                token: any;
                jwtToken: any;
                updates: any;
                headers: any;
            }) => any;
        };
        network: {
            agencies: {
                all({ token, jwtToken, query, headers }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                }): any;
                get({ token, query, headers, sellerId }: {
                    token: any;
                    query: any;
                    headers: any;
                    sellerId: any;
                }): any;
                update({ jwtToken, token, sellerId, agency, headers, query }: {
                    jwtToken: any;
                    token: any;
                    sellerId: any;
                    agency: any;
                    headers: any;
                    query: any;
                }): any;
                create({ jwtToken, token, agency, headers }: {
                    jwtToken: any;
                    token: any;
                    agency: any;
                    headers: any;
                }): any;
            };
        };
        operationSettings: {
            get: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, operationSettings, headers }: {
                jwtToken: any;
                token: any;
                operationSettings: any;
                headers: any;
            }) => any;
        };
        peopleLookups: {
            all: ({ token, jwtToken, query, headers, providerId }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
                providerId: any;
            }) => any;
            getById: ({ token, jwtToken, query, headers, personId, providerId }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
                personId: any;
                providerId: any;
            }) => any;
            update: ({ jwtToken, token, personId, person, headers, providerId }: {
                jwtToken: any;
                token: any;
                personId: any;
                person: any;
                headers: any;
                providerId: any;
            }) => any;
            create: ({ jwtToken, token, person, headers, providerId }: {
                jwtToken: any;
                token: any;
                person: any;
                headers: any;
                providerId: any;
            }) => any;
            remove: ({ personId, token, jwtToken, headers }: {
                personId: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        printers: {
            all: ({ token, query, headers }: {
                token: any;
                query: any;
                headers: any;
            }) => any;
        };
        printSettings: {
            all: ({ token, query, headers }: {
                token: any;
                query: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, printSettings, headers }: {
                jwtToken: any;
                token: any;
                printSettings: any;
                headers: any;
            }) => any;
        };
        printTemplates: {
            all: ({ token, query, headers }: {
                token: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, query, headers, printTemplateId }: {
                token: any;
                query: any;
                headers: any;
                printTemplateId: any;
            }) => any;
            update: ({ jwtToken, token, printTemplateId, printTemplate, headers, query }: {
                jwtToken: any;
                token: any;
                printTemplateId: any;
                printTemplate: any;
                headers: any;
                query: any;
            }) => any;
            create: ({ jwtToken, token, printTemplate, headers }: {
                jwtToken: any;
                token: any;
                printTemplate: any;
                headers: any;
            }) => any;
            remove: ({ printTemplateId, token, jwtToken, headers }: {
                printTemplateId: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            versions: {
                update({ printTemplateId, token, jwtToken, headers, query, versionId }: {
                    printTemplateId: any;
                    token: any;
                    jwtToken: any;
                    headers: any;
                    query: any;
                    versionId: any;
                }): any;
            };
        };
        subPrintTemplates: {
            create: ({ jwtToken, token, subPrintTemplate, headers }: {
                jwtToken: any;
                token: any;
                subPrintTemplate: any;
                headers: any;
            }) => any;
        };
        shifts: {
            all: ({ jwtToken, token, query, headers }: {
                jwtToken: any;
                token: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, userId, headers }: {
                token: any;
                userId: any;
                headers: any;
            }) => any;
            create: ({ jwtToken, token, shiftData, headers }: {
                jwtToken: any;
                token: any;
                shiftData: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, shiftId, operations, headers, query }: {
                jwtToken: any;
                token: any;
                shiftId: any;
                operations: any;
                headers: any;
                query: any;
            }) => any;
            payments: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            transactions: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            tickets: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            fees: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            refunds: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            items: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            redeemableItems: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            giftCertificates: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            parcels: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            insurances: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            invoices: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            deposits: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
                create({ jwtToken, token, shiftId, deposit, headers }: {
                    jwtToken: any;
                    token: any;
                    shiftId: any;
                    deposit: any;
                    headers: any;
                }): any;
            };
            manualTickets: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
                create({ jwtToken, token, shiftId, manualTicket, headers }: {
                    jwtToken: any;
                    token: any;
                    shiftId: any;
                    manualTicket: any;
                    headers: any;
                }): any;
            };
            locationClosures: {
                create({ jwtToken, token, locationClosure, headers }: {
                    jwtToken: any;
                    token: any;
                    locationClosure: any;
                    headers: any;
                }): any;
                all({ jwtToken, token, query, headers }: {
                    jwtToken: any;
                    token: any;
                    query: any;
                    headers: any;
                }): any;
                get({ token, jwtToken, locationClosureId, headers }: {
                    token: any;
                    jwtToken: any;
                    locationClosureId: any;
                    headers: any;
                }): any;
                comments: {
                    create({ jwtToken, token, locationClosureId, locationClosureComment, headers }: {
                        jwtToken: any;
                        token: any;
                        locationClosureId: any;
                        locationClosureComment: any;
                        headers: any;
                    }): any;
                };
            };
            startingBalances: {
                create({ jwtToken, token, shiftId, startingBalance, headers }: {
                    jwtToken: any;
                    token: any;
                    shiftId: any;
                    startingBalance: any;
                    headers: any;
                }): any;
            };
            purchaseLimitPayments: {
                get({ token, jwtToken, locationId, query, headers }: {
                    token: any;
                    jwtToken: any;
                    locationId: any;
                    query: any;
                    headers: any;
                }): any;
            };
            salesSummary: {
                get({ token, jwtToken, shiftId, query, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    query: any;
                    headers: any;
                }): any;
            };
        };
        shiftSettings: {
            get: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, shiftSettings, headers }: {
                jwtToken: any;
                token: any;
                shiftSettings: any;
                headers: any;
            }) => any;
        };
        tokens: {
            get: ({ token, jwtToken, headers, query }: {
                token: any;
                jwtToken: any;
                headers: any;
                query: any;
            }) => any;
            create: ({ data, token, jwtToken, headers }: {
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        travellers: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, id, data, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, query, data, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
        };
        trustedMachines: {
            create: ({ token, jwtToken, data, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        twilioSettings: {
            get: ({ jwtToken, token, query, headers }: {
                jwtToken: any;
                token: any;
                query: any;
                headers: any;
            }) => any;
            update: ({ jwtToken, token, twilioSettings, headers }: {
                jwtToken: any;
                token: any;
                twilioSettings: any;
                headers: any;
            }) => any;
        };
        users: {
            get: ({ token, jwtToken, id, headers }?: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, query, data, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, userId, user, headers }: {
                token: any;
                jwtToken: any;
                userId: any;
                user: any;
                headers: any;
            }) => any;
            sequences: {
                create({ jwtToken, token, userId, sequence, headers }: {
                    jwtToken: any;
                    token: any;
                    userId: any;
                    sequence: any;
                    headers: any;
                }): any;
                update({ jwtToken, token, userId, sequenceId, sequence, headers }: {
                    jwtToken: any;
                    token: any;
                    userId: any;
                    sequenceId: any;
                    sequence: any;
                    headers: any;
                }): any;
            };
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
        websalesConfig: {
            get: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, websalesConfigId, websalesConfig, headers }: {
                token: any;
                jwtToken: any;
                websalesConfigId: any;
                websalesConfig: any;
                headers: any;
            }) => any;
        };
    };
    sales: {
        docs: {
            get: () => any;
        };
        parcelQuotes: {
            get: ({ token, parcelQuoteData, jwtToken, headers }: {
                token: any;
                parcelQuoteData: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        paymentProviders: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        cart: {
            get: ({ token, id, providerId, headers }: {
                token: any;
                id: any;
                providerId: any;
                headers: any;
            }) => any;
            create: ({ token, cart, jwtToken, headers }: {
                token: any;
                cart: any;
                jwtToken: any;
                headers: any;
            }) => any;
            add: ({ token, cartId, cart, jwtToken, headers }: {
                token: any;
                cartId: any;
                cart: any;
                jwtToken: any;
                headers: any;
            }) => any;
            deleteItems: ({ token, cartId, params, jwtToken, headers }: {
                token: any;
                cartId: any;
                params: any;
                jwtToken: any;
                headers: any;
            }) => any;
            loyaltyPointsAmount: {
                get({ token, jwtToken, cartId, query, headers }: {
                    token: any;
                    jwtToken: any;
                    cartId: any;
                    query?: {};
                    headers: any;
                }): any;
            };
            patch: ({ token, jwtToken, cartId, data, headers }: {
                token: any;
                jwtToken: any;
                cartId: any;
                data: any;
                headers: any;
            }) => any;
            partialDepositStatus: {
                get({ token, jwtToken, shiftId, headers }: {
                    token: any;
                    jwtToken: any;
                    shiftId: any;
                    headers: any;
                }): any;
            };
            payments: {
                delete({ token, cartId, jwtToken, headers }: {
                    token: any;
                    cartId: any;
                    jwtToken: any;
                    headers: any;
                }): any;
            };
            taxExemptPaymentMethod: {
                post({ token, cartId, jwtToken, headers, data }: {
                    token: any;
                    cartId: any;
                    jwtToken: any;
                    headers: any;
                    data?: {};
                }): any;
            };
        };
        giftCertificates: {
            get: ({ token, GCNumber, query, headers }: {
                token: any;
                GCNumber: any;
                query?: {};
                headers: any;
            }) => any;
        };
        customFields: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        order: {
            create: ({ token, order, jwtToken, headers }: {
                token: any;
                order: any;
                jwtToken: any;
                headers: any;
            }) => any;
            get: ({ token, orderId, query, headers }: {
                token: any;
                orderId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        voucher: {
            get: ({ token, voucher, headers }: {
                token: any;
                voucher: any;
                headers: any;
            }) => any;
        };
        cartPromo: {
            create: ({ token, jwtToken, cartId, query, headers }: {
                token: any;
                jwtToken: any;
                cartId: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, cartId, query, headers }: {
                token: any;
                jwtToken: any;
                cartId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        bundles: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        redeemableItems: {
            get: ({ token, redeemableItemId, query, headers }: {
                token: any;
                redeemableItemId: any;
                query?: {};
                headers: any;
            }) => any;
            getValid: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        flexpasses: {
            get: ({ token, jwtToken, flexpassId, query, headers }: {
                token: any;
                jwtToken: any;
                flexpassId: any;
                query?: {};
                headers: any;
            }) => any;
        };
        syncEntry: {
            patch: ({ token, data, jwtToken, headers }: {
                token: any;
                data: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        checkInInfo: {
            get: ({ token, jwtToken, id, headers, query }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
                query?: {};
            }) => any;
        };
        cancellations: {
            sets: {
                create: ({ token, jwtToken, cancelData, headers }: {
                    token: string;
                    jwtToken: string;
                    cancelData: CancelSetData;
                    headers: any;
                }) => Promise<any>;
            };
            refunds: {
                create: ({ token, jwtToken, cancelSet, headers }: {
                    token: string;
                    jwtToken: string;
                    cancelSet: any;
                    headers: any;
                }) => Promise<any>;
            };
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    operations: {
        docs: {
            get: () => any;
        };
        flexpasses: {
            deleteScanBytripId: ({ jwtToken, token, flexpassId, tripId, headers }: {
                jwtToken: any;
                token: any;
                flexpassId: any;
                tripId: any;
                headers: any;
            }) => any;
        };
        parcel: {
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, query, headers, providerId }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
                providerId: any;
            }) => any;
            addScan: ({ token, jwtToken, id, operationType, locationData, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                operationType: any;
                locationData: any;
                headers: any;
            }) => any;
            addComment: ({ token, jwtToken, headers, id, comment }: {
                token: any;
                jwtToken: any;
                headers: any;
                id: any;
                comment: any;
            }) => any;
            deleteComment: ({ token, jwtToken, headers, id, commentId }: {
                token: any;
                jwtToken: any;
                headers: any;
                id: any;
                commentId: any;
            }) => any;
        };
        appliedInsurance: {
            all: ({ token, jwtToken, trxId, headers }: {
                token: any;
                jwtToken: any;
                trxId: any;
                headers: any;
            }) => any;
        };
        transaction: {
            get: ({ token, jwtToken, id, providerId, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                providerId: any;
                headers: any;
            }) => any;
        };
        transactions: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, trxId, query, headers }: {
                token: any;
                jwtToken: any;
                trxId: any;
                query: any;
                headers: any;
            }) => any;
            getTickets: ({ token, jwtToken, trxId, headers }: {
                token: any;
                jwtToken: any;
                trxId: any;
                headers: any;
            }) => any;
            appliedInsurance: ({ token, jwtToken, trxId, headers }: {
                token: any;
                jwtToken: any;
                trxId: any;
                headers: any;
            }) => any;
            companionTickets: ({ token, jwtToken, transactionId, ticketIds, headers }: {
                token: any;
                jwtToken: any;
                transactionId: any;
                ticketIds: any;
                headers: any;
            }) => any;
            expireAll: ({ internalAuthTokenProvider, jwtToken, transactionId, avoidEmail, token, headers }: {
                internalAuthTokenProvider: any;
                jwtToken: any;
                transactionId: any;
                avoidEmail: any;
                token: any;
                headers: any;
            }) => any;
            cancellableItems: ({ token, jwtToken, transactionId, headers, displayAll, channel }: {
                token: any;
                jwtToken: any;
                transactionId: any;
                headers: any;
                displayAll: any;
                channel: any;
            }) => any;
            payments: {
                update({ token, jwtToken, trxId, paymentResult, headers }: {
                    token: any;
                    jwtToken: any;
                    trxId: any;
                    paymentResult: any;
                    headers: any;
                }): any;
            };
            invoices: {
                create({ token, jwtToken, transactionId, query, invoice, headers }: {
                    token: any;
                    jwtToken: any;
                    transactionId: any;
                    query: any;
                    invoice: any;
                    headers: any;
                }): any;
            };
            creditNotes: {
                create({ token, jwtToken, transactionId, query, creditNote, headers }: {
                    token: any;
                    jwtToken: any;
                    transactionId: any;
                    query: any;
                    creditNote: any;
                    headers: any;
                }): any;
            };
        };
        tickets: {
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, query, headers, providerId }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
                providerId: any;
            }) => any;
            patch: ({ token, jwtToken, id, operations, warningsEnabled, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                operations: any;
                warningsEnabled: any;
                headers: any;
            }) => any;
            companionTickets: ({ token, jwtToken, ticketId, headers }: {
                token: any;
                jwtToken: any;
                ticketId: any;
                headers: any;
            }) => any;
        };
        manifest: {
            get: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            getAll: ({ token, jwtToken, providerId, data, headers }: {
                token: any;
                jwtToken: any;
                providerId: any;
                data: any;
                headers: any;
            }) => any;
            getById: ({ token, jwtToken, manifestId, query, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                query?: {};
                headers: any;
            }) => any;
            outlook: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            patch: ({ token, jwtToken, query, operations, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                operations: any;
                headers: any;
            }) => any;
            save: ({ token, jwtToken, providerId, data, headers }: {
                token: any;
                jwtToken: any;
                providerId: any;
                data: any;
                headers: any;
            }) => any;
            addUser: ({ token, jwtToken, manifestId, query, data, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            removeUser: ({ token, jwtToken, manifestId, userId, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                userId: any;
                headers: any;
            }) => any;
            updateComment: ({ token, jwtToken, manifestId, query, data, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            updateStatus: ({ token, jwtToken, manifestId, query, data, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            addCapacityException: ({ token, jwtToken, manifestId, query, data, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            removeCapacityException: ({ token, jwtToken, manifestId, exceptionId, headers }: {
                token: any;
                jwtToken: any;
                manifestId: any;
                exceptionId: any;
                headers: any;
            }) => any;
            dispatch: ({ token, jwtToken, headers, manifestId, data, query }: {
                token: any;
                jwtToken: any;
                headers: any;
                manifestId: any;
                data: any;
                query: any;
            }) => any;
            updateDispatchReporting: ({ token, jwtToken, headers, manifestId, data }: {
                token: any;
                jwtToken: any;
                headers: any;
                manifestId: any;
                data: any;
            }) => any;
            createDispatchReporting: ({ token, jwtToken, headers, data }: {
                token: any;
                jwtToken: any;
                headers: any;
                data: any;
            }) => any;
            checkIn: {
                create({ token, jwtToken, query, headers, data, manifestId, legFromId }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                    data: any;
                    manifestId: any;
                    legFromId: any;
                }): any;
                open({ token, jwtToken, query, headers, manifestId, legFromId }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                    manifestId: any;
                    legFromId: any;
                }): any;
                close({ token, jwtToken, query, headers, manifestId, legFromId }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    headers: any;
                    manifestId: any;
                    legFromId: any;
                }): any;
            };
            legs: {
                update({ token, jwtToken, data, query, headers, manifestId, legFromId }: {
                    token: any;
                    jwtToken: any;
                    data: any;
                    query?: {};
                    headers: any;
                    manifestId: any;
                    legFromId: any;
                }): any;
                tickets: {
                    update({ token, jwtToken, data, query, headers, manifestId, legFromId, ticketId }: {
                        token: any;
                        jwtToken: any;
                        data: any;
                        query?: {};
                        headers: any;
                        manifestId: any;
                        legFromId: any;
                        ticketId: any;
                    }): any;
                    noshow({ token, jwtToken, query, headers, manifestId, legFromId, ticketId }: {
                        token: any;
                        jwtToken: any;
                        query?: {};
                        headers: any;
                        manifestId: any;
                        legFromId: any;
                        ticketId: any;
                    }): any;
                };
            };
            reports: {
                get({ token, jwtToken, query, responseType, id, headers }: {
                    token: any;
                    jwtToken: any;
                    query?: {};
                    responseType?: string;
                    id: any;
                    headers: any;
                }): any;
            };
            labels: {
                add({ token, jwtToken, manifestId, query, headers, data }: {
                    token: any;
                    jwtToken: any;
                    manifestId: any;
                    query?: {};
                    headers: any;
                    data: any;
                }): any;
                remove({ token, jwtToken, manifestId, labelId, headers }: {
                    token: any;
                    jwtToken: any;
                    manifestId: any;
                    labelId: any;
                    headers: any;
                }): any;
            };
        };
        calendarEntries: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        redemption: {
            create: ({ token, jwtToken, redemption, headers }: {
                token: any;
                jwtToken: any;
                redemption: any;
                headers: any;
            }) => any;
            getValidate: ({ token, jwtToken, passId, timezone, headers }: {
                token: any;
                jwtToken: any;
                passId: any;
                timezone: any;
                headers: any;
            }) => any;
            unredeem: ({ token, jwtToken, data, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                headers: any;
            }) => any;
        };
        tripChangeInfo: {
            get: ({ token, jwtToken, productId, params, headers }: {
                token: any;
                jwtToken: any;
                productId: any;
                params: any;
                headers: any;
            }) => any;
        };
        segments: {
            all: ({ token, jwtToken, productId, ticketId, providerId, headers }: {
                token: any;
                jwtToken: any;
                productId: any;
                ticketId: any;
                providerId: any;
                headers: any;
            }) => any;
        };
        loans: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ loanId, token, headers }: {
                loanId: any;
                token: any;
                headers: any;
            }) => any;
        };
        movements: {
            create: ({ token, jwtToken, movement, query, headers }: {
                token: any;
                jwtToken: any;
                movement: any;
                query?: {};
                headers: any;
            }) => any;
        };
        scheduledNotifications: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, id, data, headers, query }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                headers: any;
                query: any;
            }) => any;
            remove: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, query, data, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
        };
        waitlists: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, waitlistId, headers }: {
                token: any;
                jwtToken: any;
                waitlistId: any;
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, waitlistId, headers }: {
                token: any;
                jwtToken: any;
                waitlistId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                headers: any;
            }) => any;
        };
        accountingItems: {
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ accountingItemId, token, headers }: {
                accountingItemId: any;
                token: any;
                headers: any;
            }) => any;
        };
        outlookTrips: {
            get: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        manifestLegForTickets: {
            get: ({ token, jwtToken, ticketId, params, headers }: {
                token: any;
                jwtToken: any;
                ticketId: any;
                params: any;
                headers: any;
            }) => any;
        };
        passengerCheckInInfo: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, id, data, headers, query }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                headers: any;
                query: any;
            }) => any;
            create: ({ token, jwtToken, query, data, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
        };
        vehicleAssignments: {
            all({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }): any;
            get({ token, jwtToken, vehicleAssignmentId, headers }: {
                token: any;
                jwtToken: any;
                vehicleAssignmentId: any;
                headers: any;
            }): any;
            create({ data, token, jwtToken, headers }: {
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }): any;
            update({ vehicleAssignmentId, data, token, jwtToken, headers }: {
                vehicleAssignmentId: any;
                data: any;
                token: any;
                jwtToken: any;
                headers: any;
            }): any;
        };
        vouchers: {
            create: ({ jwtToken, token, headers, query, voucher }: {
                jwtToken: any;
                token: any;
                headers: any;
                query?: {};
                voucher?: {};
            }) => any;
        };
        soldItemsFulfillment: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        parcelManifests: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, query, data, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            parcels: {
                remove({ token, jwtToken, manifestId, parcelId, headers }: {
                    token: any;
                    jwtToken: any;
                    manifestId: any;
                    parcelId: any;
                    headers: any;
                }): any;
                create({ token, jwtToken, manifestId, query, data, headers }: {
                    token: any;
                    jwtToken: any;
                    manifestId: any;
                    query?: {};
                    data: any;
                    headers: any;
                }): any;
            };
            vehicles: {
                createOrUpdate({ token, jwtToken, manifestId, query, data, headers }: {
                    token: any;
                    jwtToken: any;
                    manifestId: any;
                    query?: {};
                    data: any;
                    headers: any;
                }): any;
            };
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    reports: {
        reportTypes: {
            get: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            getByName: ({ token, jwtToken, name, headers }: {
                token: any;
                jwtToken: any;
                name: any;
                headers: any;
            }) => any;
        };
        customReports: {
            create: ({ token, customReport, jwtToken, headers }: {
                token: any;
                customReport: any;
                jwtToken: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, customReportId, headers }: {
                token: any;
                jwtToken: any;
                customReportId: any;
                headers: any;
            }) => any;
        };
        reportEmail: {
            post: ({ token, jwtToken, report, headers }: {
                token: any;
                jwtToken: any;
                report: any;
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    notifications: {
        manifestNotifications: {
            create: ({ token, jwtToken, query, data, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
            all: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        printedTickets: {
            get: ({ token, jwtToken, responseType, trxId, lang, date, headers }: {
                token: any;
                jwtToken: any;
                responseType?: string;
                trxId: any;
                lang: any;
                date: any;
                headers: any;
            }) => any;
        };
        pdfs: {
            get: ({ token, jwtToken, query, itemId, headers, responseType }: {
                token: any;
                jwtToken: any;
                query?: {};
                itemId: any;
                headers: any;
                responseType: any;
            }) => any;
        };
        pdfData: {
            get: ({ token, jwtToken, query, itemId, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                itemId: any;
                headers: any;
            }) => any;
        };
        email: {
            create: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        customers: {
            sendResetPasswordEmail: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            sendActivationEmail: ({ token, query, data, headers }: {
                token: any;
                query?: {};
                data: any;
                headers: any;
            }) => any;
        };
        twilio: {
            sms: {
                create({ token, jwtToken, smsMsg, headers }: {
                    token: any;
                    jwtToken: any;
                    smsMsg?: {};
                    headers: any;
                }): any;
            };
            whatsapp: {
                create({ token, jwtToken, whatsappMsg, headers }: {
                    token: any;
                    jwtToken: any;
                    whatsappMsg?: {};
                    headers: any;
                }): any;
            };
        };
        ordersRulesValidations: {
            create: ({ token, jwtToken, query, orderRulesValidation, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                orderRulesValidation: any;
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    uploads: {
        files: {
            upload: ({ token, jwtToken, formData, headers }: {
                token: any;
                jwtToken: any;
                formData: any;
                headers: any;
            }) => any;
        };
        images: {
            create: ({ token, jwtToken, formData, headers }: {
                token: any;
                jwtToken: any;
                formData: any;
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    loyalty: {
        programs: {
            all: ({ token, context, query, headers }: {
                token: any;
                context: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, program, headers }: {
                token: any;
                jwtToken: any;
                program: any;
                headers: any;
            }) => any;
            put: ({ token, jwtToken, programId, program, headers }: {
                token: any;
                jwtToken: any;
                programId: any;
                program: any;
                headers: any;
            }) => any;
        };
        movements: {
            all: ({ token, jwtToken, programId, query, headers }: {
                token: any;
                jwtToken: any;
                programId: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, programId, movement, query, headers }: {
                token: any;
                jwtToken: any;
                programId: any;
                movement: any;
                query?: {};
                headers: any;
            }) => any;
            balance: {
                get({ token, jwtToken, programId, customerId, query, headers }: {
                    token: any;
                    jwtToken: any;
                    programId: any;
                    customerId: any;
                    query?: {};
                    headers: any;
                }): any;
            };
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    webhooks: {
        subscriptions: {
            all: ({ token, jwtToken, context, query, headers }: {
                token: any;
                jwtToken: any;
                context: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, subscription, headers }: {
                token: any;
                jwtToken: any;
                subscription: any;
                headers: any;
            }) => any;
            getById: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            put: ({ token, jwtToken, id, subscription, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                subscription: any;
                headers: any;
            }) => any;
            deleteById: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
        };
        events: {
            all: ({ token, jwtToken, context, query, headers }: {
                token: any;
                jwtToken: any;
                context: any;
                query?: {};
                headers: any;
            }) => any;
        };
        undelivered: {
            all: ({ token, jwtToken, context, query, headers }: {
                token: any;
                jwtToken: any;
                context: any;
                query?: {};
                headers: any;
            }) => any;
            getById: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            patch: ({ token, jwtToken, operation, headers }: {
                token: any;
                jwtToken: any;
                operation: any;
                headers: any;
            }) => any;
            resend: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
            resendAll: ({ token, jwtToken, headers }: {
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            deleteById: ({ token, jwtToken, id, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                headers: any;
            }) => any;
        };
        webhooks: {
            emit: ({ token, jwtToken, webhook, headers }: {
                token: any;
                jwtToken: any;
                webhook: any;
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    seatmaps: {
        accessTicket: {
            create: ({ token, jwtToken, headers }: {
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        seat: {
            update: ({ token, jwtToken, params, headers }: {
                token: any;
                jwtToken: any;
                params: any;
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    btrzpay: {
        docs: {
            get: () => any;
        };
        cardpointeTerminals: {
            all: ({ token, jwtToken, headers }: {
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, merchantId, terminalId, headers }: {
                token: any;
                jwtToken: any;
                merchantId: any;
                terminalId: any;
                headers: any;
            }) => any;
            readCard: {
                get({ token, jwtToken, readCardResultId, headers }: {
                    token: any;
                    jwtToken: any;
                    readCardResultId: any;
                    headers: any;
                }): any;
                create({ token, jwtToken, readCard, headers }: {
                    token: any;
                    jwtToken: any;
                    readCard: any;
                    headers: any;
                }): any;
            };
            ping: {
                create({ token, jwtToken, ping, headers }: {
                    token: any;
                    jwtToken: any;
                    ping: any;
                    headers: any;
                }): any;
            };
        };
        paymentMethods: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            getByProviderName: ({ token, jwtToken, providerName, headers }: {
                token: any;
                jwtToken: any;
                providerName: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, paymentMethod, headers }: {
                token: any;
                jwtToken: any;
                paymentMethod: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, paymentMethodId, headers, query }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                headers: any;
                query?: {};
            }) => any;
            setToAgency: ({ token, jwtToken, agencyId, providerId, paymentMethodNames, headers }: {
                token: any;
                jwtToken: any;
                agencyId: any;
                providerId: any;
                paymentMethodNames: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, paymentMethodId, paymentMethod, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                paymentMethod: any;
                headers: any;
            }) => any;
            createDefaultPaymentMethods: ({ token, jwtToken, accountId }: {
                token: any;
                jwtToken: any;
                accountId: any;
            }) => any;
            deleteCustomersCreditCardInfo: ({ token, jwtToken, paymentMethodId }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
            }) => any;
            deletePaymentMethodsDomain: ({ token, jwtToken, domain }: {
                token: any;
                jwtToken: any;
                domain: any;
            }) => any;
        };
        referenceNumbers: {
            create: ({ token, jwtToken, referenceNumberRequest, headers }: {
                token: any;
                jwtToken: any;
                referenceNumberRequest: any;
                headers: any;
            }) => any;
        };
        payments: {
            create: ({ token, jwtToken, payments, headers }: {
                token: any;
                jwtToken: any;
                payments: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, transactionId, headers }: {
                token: any;
                jwtToken: any;
                transactionId: any;
                headers: any;
            }) => any;
        };
        referencedPayments: {
            getStatus: ({ token, jwtToken, transactionId, referenceNumber, headers }: {
                token: any;
                jwtToken: any;
                transactionId: any;
                referenceNumber: any;
                headers: any;
            }) => any;
            update: ({ token, jwtToken, externalType, referenceNumber, paymentResult, headers }: {
                token: any;
                jwtToken: any;
                externalType: any;
                referenceNumber: any;
                paymentResult: any;
                headers: any;
            }) => any;
        };
        customers: {
            remove: ({ token, jwtToken, paymentMethodId, customerId, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customerId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, paymentMethodId, customer, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customer: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, paymentMethodId, customerId, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customerId: any;
                headers: any;
            }) => any;
        };
        customerCards: {
            remove: ({ token, jwtToken, paymentMethodId, customerId, customerCardId, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customerId: any;
                customerCardId: any;
                headers: any;
            }) => any;
            create: ({ token, jwtToken, paymentMethodId, customerId, customerCard, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customerId: any;
                customerCard: any;
                headers: any;
            }) => any;
            get: ({ token, jwtToken, paymentMethodId, customerId, customerCardId, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customerId: any;
                customerCardId: any;
                headers: any;
            }) => any;
            all: ({ token, jwtToken, paymentMethodId, customerId, headers }: {
                token: any;
                jwtToken: any;
                paymentMethodId: any;
                customerId: any;
                headers: any;
            }) => any;
        };
        squareTerminals: {
            get: ({ token, jwtToken, headers }: {
                token: any;
                jwtToken: any;
                headers: any;
            }) => any;
        };
        squareWebhooks: {
            create: ({ token, jwtToken, data, providerId, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                providerId: any;
                headers: any;
            }) => any;
        };
        oxxo: {
            token: {
                get({ jwtToken, headers, internalAuthTokenProvider }: {
                    jwtToken: any;
                    headers: any;
                    internalAuthTokenProvider: any;
                }): any;
            };
            payments: {
                all({ jwtToken, headers, oxxoToken, query, internalAuthTokenProvider }: {
                    jwtToken: any;
                    headers: any;
                    oxxoToken: any;
                    query: any;
                    internalAuthTokenProvider: any;
                }): any;
                update({ jwtToken, headers, oxxoToken, query, referenceNumber, data, internalAuthTokenProvider }: {
                    jwtToken: any;
                    headers: any;
                    oxxoToken: any;
                    query: any;
                    referenceNumber: any;
                    data: any;
                    internalAuthTokenProvider: any;
                }): any;
            };
        };
        datalogic: {
            payments: {
                all({ token, jwtToken, headers, query, internalAuthTokenProvider }: {
                    token: any;
                    jwtToken: any;
                    headers: any;
                    query: any;
                    internalAuthTokenProvider: any;
                }): any;
                update({ token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider }: {
                    token: any;
                    jwtToken: any;
                    headers: any;
                    query: any;
                    referenceNumber: any;
                    data: any;
                    internalAuthTokenProvider: any;
                }): any;
                reverse({ token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider }: {
                    token: any;
                    jwtToken: any;
                    headers: any;
                    query: any;
                    referenceNumber: any;
                    data: any;
                    internalAuthTokenProvider: any;
                }): any;
            };
            referenceNumber: {
                get({ token, jwtToken, headers, internalAuthTokenProvider }: {
                    token: any;
                    jwtToken: any;
                    headers: any;
                    internalAuthTokenProvider: any;
                }): any;
            };
            authCode: {
                get({ token, jwtToken, headers, internalAuthTokenProvider }: {
                    token: any;
                    jwtToken: any;
                    headers: any;
                    internalAuthTokenProvider: any;
                }): any;
            };
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    invoices: {
        docs: {
            get: () => any;
        };
        providers: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, id, data, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        providersSequences: {
            all: ({ token, jwtToken, invoiceProviderId, query, headers }: {
                token: any;
                jwtToken: any;
                invoiceProviderId: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, query, headers }: {
                token: any;
                jwtToken: any;
                invoiceProviderId: any;
                invoiceProviderSequenceId: any;
                query?: {};
                headers: any;
            }) => any;
            remove: ({ token, jwtToken, invoiceProviderId, id, query, headers }: {
                token: any;
                jwtToken: any;
                invoiceProviderId: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            create: ({ token, jwtToken, invoiceProviderId, data, query, headers }: {
                token: any;
                jwtToken: any;
                invoiceProviderId: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            update: ({ token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, data, query, headers }: {
                token: any;
                jwtToken: any;
                invoiceProviderId: any;
                invoiceProviderSequenceId: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        infile: {
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            validateCreate: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        system: {
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            validateCreate: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        dlink: {
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            validateCreate: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        gti: {
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            validateCreate: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        pdfs: {
            all: ({ token, jwtToken, query, responseType, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                responseType?: string;
                headers: any;
            }) => any;
        };
        emails: {
            create: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        taxIds: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
        };
        invoices: {
            all: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            get: ({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }) => any;
            getInvoicesFailures: ({ token, jwtToken, query, headers }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
            }) => any;
            retryInvoicing: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
            overrideBuyerRetryInvoicing: ({ token, jwtToken, data, query, headers }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
    gps: {
        scannerAppLocation: {
            get: ({ token, query, headers }: {
                token: any;
                query?: {};
                headers: any;
            }) => any;
        };
        __test: {
            client: import("axios").AxiosInstance;
        };
    };
};
export = _exports;
