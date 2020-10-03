import React, { useState } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import '@progress/kendo-theme-material/dist/all.css';

export default function SiteList() {

    return (
        <div>
            <Grid
                style={{ height: '100%' }}
                data={this.state.sites}
            >

                <Column field="id" title="ID" width="40px" />
                <Column field="name" title="Name" width="90px" />
                <Column field="siteId" title="Site ID" width="120px" />
                <Column field="serialNo" title="Serial Number" width="120px" />
                <Column field="phoneNumber" title="Phone Number" width="120px" />
                <Column field="ipAddress" title="IP Address" width="120px" />
                <Column field="useGlobalIntervarl" title="Use global interval" width="150px" />
                <Column field="interval" title="Interval" width="80px" />
                <Column field="autoLocation" title="Auto Location" width="90px" />
                <Column field="latitude" title="Latitude" width="110px" />
                <Column field="longitude" title="Longitude" width="110px" />
                <Column field="hvEnabled" title="HV enabled" width="100px" />
                <Column field="lvEnabled" title="LV enabled" width="100px" />
                <Column field="hvPower" title="HV power" />
                <Column field="hvThreshold" title="HV treshold" />
                <Column field="hvRepeat" title="HV repeat" />
                <Column field="temperatureMin" title="Temperature min" />
                <Column field="temperatureMax" title="Temperature max" />
                <Column field="batteryMin" title="Battery min" />
                <Column field="batteryMax" title="Battery max" />
                <Column field="input1" title="Input 1" />
                <Column field="input2" title="Input 2" />
                <Column field="output1" title="Output 1" />
                <Column field="output2" title="Output 2" />

            </Grid>
        </div>
    );
}