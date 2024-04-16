import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";

export const Map = () => {
    return (
        <Fade cascade damping={.9}>
        <MapSection>
            <FlexWrapper>
                <iframe title={'yandexMap'}
                    src="https://yandex.by/map-widget/v1/?ll=-122.428014%2C37.758634&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjQwNTc2ODgyEklVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIENhbGlmb3JuaWEsIFNhbiBGcmFuY2lzY28gQ291bnR5LCBTYW4gRnJhbmNpc2NvIgoN0uT0whWUCRdC&z=13.4"
                    width="100%"
                >
                </iframe>
            </FlexWrapper>
        </MapSection>
        </Fade>
    );
};
 const MapSection=styled.section`
   padding-top: 70px;
   margin-bottom: 30px;
   
   iframe {
     border: none;
     min-height: 300px;
   }
 `