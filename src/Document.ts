const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('document.pdf'));

function header() {
    doc.image('./brq-vivo-logo.jpg', 10, 15, { width: 300 })

}
function Title(title: string) {
    header();
    doc.fontSize(24);
    doc.moveTo(0, 140).text(title, {
        align: 'center'
    });
    doc.moveDown();
}

function SubTitle(subtitle: string) {
    doc.fontSize(10);
    doc.text(subtitle, { align: 'center' });
}

function End() {
    console.log('end');
    doc.end();
}
function DocumentPdf(target: any, name: any, descriptor: any) {

    return descriptor;
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

Title('UserProfile V3.');
SubTitle('Caderno de Teste');
End();
