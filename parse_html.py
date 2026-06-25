from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_script = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.in_script = True

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.in_script = False

    def handle_data(self, data):
        if not self.in_script and data.strip():
            self.text.append(data.strip())

parser = MyHTMLParser()
with open('/Users/yaywiin/.gemini/antigravity-ide/brain/9871422f-0263-49c1-b10e-3e82d133a65a/.system_generated/steps/611/content.md') as f:
    parser.feed(f.read())
print('\n'.join(parser.text))
