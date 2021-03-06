import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/components/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessagesComponent } from './pages/chat/components/chat-messages/chat-messages.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';
import { AuthService } from './services/auth.service';
import { SplashComponent } from './splash/splash.component';
import { MatchesComponent } from './matches/matches.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    SignupComponent, ChatComponent, NavbarComponent, ChatInputComponent, ChatroomListComponent, ChatroomTitleBarComponent, ChatMessagesComponent, ChatroomWindowComponent,SurveyComponent, SplashComponent, MatchesComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
