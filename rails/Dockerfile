FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y vim

RUN apt-get install -y build-essential
RUN apt-get install -y curl wget zip git

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain stable -y

RUN git clone https://github.com/pyenv/pyenv.git ~/.pyenv
RUN [ \
    "/bin/bash", "-c", \
    " \
    source ~/.bashrc \
    && echo 'export PYENV_ROOT=\"$HOME/.pyenv\"' >> ~/.bashrc \
    && echo 'command -v pyenv >/dev/null || export PATH=\"$PYENV_ROOT/bin:$PATH\"' >> ~/.bashrc \
    && echo 'eval \"$(pyenv init -)\"' >> ~/.bashrc \
    && source ~/.bashrc \
    && export CONFIGURE_OPTS=\"--enable-shared\" \
    && pyenv install 3.10.6 \
    && pyenv global 3.10.6 \
    && pip install numpy==1.21.0 \
    && pip install spacy==3.6.0 \
    && pip install ginza==5.1.3 \
    && python -m spacy download en_core_web_md \
    "] 

RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN gem update --system
RUN bundle update --bundler

RUN bundle install
COPY . /myapp

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]