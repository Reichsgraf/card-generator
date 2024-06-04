import {Component, Input} from '@angular/core';
import {QuillEditorComponent} from "ngx-quill";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [
    QuillEditorComponent,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {

  @Input() control!: FormControl;
  quillEditorRef: any;

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    /* TODO: indent handler is needed
        const toolbar = this.quillEditorRef.getModule('toolbar');
        toolbar.addHandler('clear', this.clearController);
    */
  }

  clear() {
    this.quillEditorRef.removeFormat(0, this.quillEditorRef.getLength(), 'user');
    this.quillEditorRef.deleteText(0, this.quillEditorRef.getLength(), 'user');
  }

}


