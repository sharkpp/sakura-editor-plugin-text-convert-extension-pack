//-------------------------------------------------------------------------------
// ucfirst.js - “ª‚ð‘å•¶Žš‚É•ÏŠ·
//-------------------------------------------------------------------------------
//
// Copyright(c) 2015 sharkpp All rights reserved.
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

	var text = Editor.GetSelectedString(0);

	// “ª‚ð‘å•¶Žš‚É
	text = text.charAt(0).toUpperCase() + s.slice(1);

	Editor.InsText(text);

	Editor.SetDrawSwitch(1);
	Editor.ReDraw();

})();
