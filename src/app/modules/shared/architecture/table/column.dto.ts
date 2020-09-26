export class ColumnDTO {
  label: string;
  objects: Array<string>;
  attributes: Array<string>;
  separator: string;
  size: number;

  constructor(label: string, objects: Array<string>, attributes: Array<string>, separator: string, size: number) {
    this.label = label;
    this.objects = objects;
    this.attributes = attributes;
    this.separator = separator;
    this.size = size;
  }
}
