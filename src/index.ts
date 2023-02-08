import {Project as TsProject} from 'ts-morph'

const project = new TsProject({
    tsConfigFilePath: 'tsconfig.json',})
    
const sourceFile = project.getSourceFile('src/components/Button.vue')
console.log(sourceFile?.getFilePath())
sourceFile?.getExportedDeclarations().forEach(declaration => {
    console.log(declaration)
}   
)
const project2 = new TsProject();
project2.addSourceFilesAtPaths('src/components/*.ts')
const sourceFile2 = project2.getSourceFile('src/components/Person.ts')
console.log(sourceFile2?.getFilePath())
sourceFile2?.getExportedDeclarations().forEach(declaration => {
    console.log(declaration)
}   
)

