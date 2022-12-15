package com.drziauddinformulary;
import static com.blitzapp.animatedsplash.animation.AddImageView.FIT_CENTER;
import static com.blitzapp.animatedsplash.animation.AddImageView.getCenterX;
import static com.blitzapp.animatedsplash.animation.Splash.FADE;
import static com.blitzapp.animatedsplash.animation.Splash.SLIDE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHFADE;
import static com.blitzapp.animatedsplash.animation.Splash.createSplashView;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundColor;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;
import com.blitzapp.animatedsplash.animation.Splash;
import com.blitzapp.animatedsplash.animation.AddImageView;
 import com.blitzapp.animatedsplash.animation.GroupAnimation;

import android.os.Build;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;



public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "DrZiauddinFormulary";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    public void onCreate(Bundle saved) {
           super.onCreate(saved);
            initiateSplash();
       }

  public void initiateSplash() {


// Create Splash
          //  Splash splash = new Splash(getContext());
    // basic configuration
    // Create dialog
        createSplashView(MainActivity.this);// required for library
    // setBackgroundColor("#001621"); // background of splash screen
    setBackgroundImage(R.drawable.background);
    setSplashHideAnimation(SPLASHFADE); // animation performed when hiding the splash
    setSplashHideDelay(1500); // delay for hiding the splash, after animation is completed

    double logoWidth = screenWidth*0.569;
    double logoHeight = logoWidth/2.78;

    double logoPOSX = getCenterX(logoWidth);
    double logoPOSY = screenHeight*0.364;


    // duration of overall animation
    int duration = 2000;

    // Creation of element on canvas
    // AddImageView blueRing = new AddImageView(R.drawable.blue_ring,blueRingSize,blueRingSize,blueRingPOSX,blueRingPOSY,FIT_CENTER,false);
    // AddImageView dot = new AddImageView(R.drawable.dot,dotSize,dotSize,dotPOSX,dotPOSY,FIT_CENTER,false);
    AddImageView logo = new AddImageView(R.drawable.logo1,logoHeight,logoWidth,logoPOSX,logoPOSY,0,0, FIT_CENTER,false);
    // AddImageView greenRing = new AddImageView(R.drawable.green_ring,greenRingSize,greenRingSize,greenRingPOSX,greenRingPOSY,FIT_CENTER,false);
    // AddImageView gradientRing = new AddImageView(R.drawable.gradient_ring,gradientRingSize,gradientRingSize,gradientRingPOSX,gradientRingPOSY,FIT_CENTER,false);
    
    // animation of elements in a group / parallel animation
    GroupAnimation group = new GroupAnimation();
    // group.performGroupAnimation(blueRing,SLIDE,duration,0,blueRingToPOSX,0,blueRingToPOSY,false);
    // group.performGroupAnimation(dot,SLIDE,duration,0,-dotToPOSX,0,0,false);
     group.performGroupAnimation(logo, FADE, duration, 0f, 1f, false);
    // group.performGroupAnimation(greenRing,SLIDE,duration,0,greenRingToPOSX,0,0,false);
    // group.performGroupAnimation(gradientRing,SLIDE,duration,0,gradientRingToPOSX,0,gradientRingToPOSY,false);

    // show splash
    splashShow();
  }
  }
}
