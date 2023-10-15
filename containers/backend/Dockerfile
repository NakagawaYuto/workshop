# Pythonのイメージを指定
FROM python:3
# PYTHONDONTWRITEBYTECODEとPYTHONUNBUFFEREDはオプション
# pycファイル(および__pycache__)の生成を行わないようにする
ENV PYTHONDONTWRITEBYTECODE=1
# 標準出力・標準エラーのストリームのバッファリングを行わない
ENV PYTHONUNBUFFERED=1
# コンテナのワークディレクトリを/codeに指定
WORKDIR /code
# ローカルのrequirements.txtをコンテナの/codeフォルダ直下に置く
COPY requirements.txt /code/
# コンテナ内でpipをアップグレード
RUN pip install --upgrade pip
# pip install -r requirements.txtを実行
RUN pip install -r requirements.txt
# ソースコードをコンテナにコピー
COPY . /code/
# entrypoint.shに実行権限を付与
# entrypoint.shに関して(所有者)(所有グループ)(その他)で実行権限を与えている．
# 具体的には，所有者はrwx,残りはrxになっている．rはreadで4,wはwriteで2,xはexcuteで1の合計が記載されてる．
# RUN chmod 755 entrypoint.sh
