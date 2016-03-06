//-------------------------------------------------------------------------------
// normalize_let.js - カラムを揃える
//-------------------------------------------------------------------------------
//
// Copyright(c) 2016 sharkpp All rights reserved.
//
// The MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
//-------------------------------------------------------------------------------

(function(){

	Editor.SetDrawSwitch(0);

	// 選択を取得
	var text = Editor.GetSelectedString(0);
	var isBoxSelected = 2 == Editor.IsTextSelected();
	//var tabWidth = Editor.ChangeTabWidth(0);

	// 行内容と改行を分離
	var lineContents = text.split(/[\r\n]+/);
	var lineFeeds    = text.split(/[^\r\n]+/);

	// 
	// ToDo: 途中の文字を比較しずれているようなら適当に合わせる処理を入れたい
	//       | AA   : BB  CCCC : DDD
	//       | XXX : YY : ZZZ
	//            ↑を↓みたいな感じ
	//       | AA  : BB  CCCC : DDD
	//       | XXX : YY       : ZZZ
//	var reCell = /(^.+?)(\s*)([:]?=)\s*(.*)$/;
	var cells, cellWidth = [], cellSpace = [];
	for(var i = 0, lineContent; lineContent = lineContents[i]; ++i) {
		cells = lineContent.replace(/^\s*/, '').split(/\s+/);
		for (var j = 0, cell; cell = cells[j]; ++j) {
			cellWidth[j] = Math.max(cellWidth[j] || 0, cell.length);
		}
	}
	for (var i = 0, num = cellWidth.length; i < num; ++i) {
		cellSpace[i] = (new Array(cellWidth[i] + 1)).join(' ');
	}

	// 行内の空白文字をそろえる削除
	for(var i = 0, lineContent; lineContent = lineContents[i]; ++i) {
		cells = lineContent.replace(/^\s*/, '').split(/\s+/);
		tmp = '';
		for (var j = 0, cell; cell = cells[j]; ++j) {
			tmp += cell + cellSpace[j].slice(0, cellWidth[j] - cell.length + 1);
		}
		lineContents[i] = tmp.replace(/\s+$/, '');
		//lineContents[i] = lineContent.replace(/^\s*/, '');
	}

	// 行を合成
	if (!isBoxSelected) {
		text = '';
		for(var i = 0, num = Math.max(lineContents.length, lineFeeds.length); i < num; ++i) {
			text += (undefined == lineContents[i] ? '' : lineContents[i])
			      + (undefined == lineFeeds[i]    ? '' : lineFeeds[i]);
		}
	}

	// 置き換え
	Editor.AddRefUndoBuffer();
	if (!isBoxSelected) {
		Editor.InsText(text);
	}
	else {
		Editor.Delete();
		for(var i = 0, num = Math.max(lineContents.length, lineFeeds.length); i < num; ++i) {
			Editor.InsText((undefined == lineContents[i] ? '' : lineContents[i]));
			Editor.Down();
		}
	}
	Editor.CommitUndoBuffer();

	Editor.SetDrawSwitch(1);
	Editor.ReDraw();

})();
