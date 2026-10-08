from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import gzip,mimetypes,urllib.parse

ROOT=Path(__file__).resolve().parents[1]/'out'
class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT),**kwargs)
    def log_message(self,*args):pass
    def do_GET(self):self.serve_asset(False)
    def do_HEAD(self):self.serve_asset(True)
    def serve_asset(self,head):
        pathname=urllib.parse.unquote(urllib.parse.urlsplit(self.path).path)
        file=(ROOT/pathname.lstrip('/')).resolve()
        if not file.is_relative_to(ROOT.resolve()):self.send_error(403);return
        if file.is_dir():file=file/'index.html'
        if not file.is_file():self.send_error(404);return
        body=file.read_bytes();mime=mimetypes.guess_type(file)[0] or 'application/octet-stream'
        encoded=file.suffix in ('.html','.css','.js','.json','.svg','.txt') and 'gzip' in self.headers.get('Accept-Encoding','')
        if encoded:body=gzip.compress(body)
        self.send_response(200)
        self.send_header('Content-Type',mime)
        self.send_header('Content-Length',str(len(body)))
        if encoded:self.send_header('Content-Encoding','gzip');self.send_header('Vary','Accept-Encoding')
        if '/_next/static/' in pathname or '/fonts/' in pathname:self.send_header('Cache-Control','public, max-age=31536000, immutable')
        elif '/images/' in pathname:self.send_header('Cache-Control','public, max-age=86400')
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Referrer-Policy','strict-origin-when-cross-origin')
        self.end_headers()
        if not head:self.wfile.write(body)
print('Safa static export ready at http://127.0.0.1:3005',flush=True)
ThreadingHTTPServer(('127.0.0.1',3005),Handler).serve_forever()
