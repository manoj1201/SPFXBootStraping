import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxWebPart01WebPartStrings';
import SpfxWebPart01 from './components/SpfxWebPart01';
import { ISpfxWebPart01Props } from './components/ISpfxWebPart01Props';

export interface ISpfxWebPart01WebPartProps {
  description: string;
}

export default class SpfxWebPart01WebPart extends BaseClientSideWebPart<ISpfxWebPart01WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxWebPart01Props > = React.createElement(
      SpfxWebPart01,
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
