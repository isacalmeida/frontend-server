export class ColumnDTO {
  label: string;
  objects: Array<string>;
  attributes: Array<string>;
  separator: string;
  size: number;

  constructor(label: string, attributes: Array<string>, size: number,
              options?: { objects?: Array<string>, separator?: string }) {
    this.label = label;
    this.attributes = attributes;
    this.size = size;

    if(options !== undefined) {
      this.objects = options.objects;
      this.separator = options.separator;
    }
  }
}
