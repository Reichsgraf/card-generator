import {Component, Input} from '@angular/core';
import {QuillEditorComponent} from "ngx-quill";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [
    QuillEditorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {

  @Input() control!: FormControl;
  quillEditorRef: any;

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    const toolbar = this.quillEditorRef.getModule('toolbar');
    toolbar.addHandler('clean', this.cleanController);
  }

  cleanController = () => {
    this.quillEditorRef.removeFormat(0, this.quillEditorRef.getLength(), 'user');
    this.quillEditorRef.deleteText(0, this.quillEditorRef.getLength() - 1, 'user');
  }

}


