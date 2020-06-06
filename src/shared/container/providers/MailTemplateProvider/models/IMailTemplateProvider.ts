import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMaiTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
