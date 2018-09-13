import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxWebPart02WebPartStrings';
import SpfxWebPart02 from './components/SpfxWebPart02';
import { ISpfxWebPart02Props } from './components/ISpfxWebPart02Props';

export interface ISpfxWebPart02WebPartProps {
  description: string;
}

export default class SpfxWebPart02WebPart extends BaseClientSideWebPart<ISpfxWebPart02WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxWebPart02Props > = React.createElement(
      SpfxWebPart02,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
