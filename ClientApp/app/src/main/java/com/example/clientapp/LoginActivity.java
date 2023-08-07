package com.example.clientapp;

import androidx.appcompat.app.AppCompatActivity;

import android.animation.AnimatorSet;
import android.animation.ValueAnimator;
import android.os.Bundle;
import android.view.ViewGroup;
import android.view.animation.AccelerateDecelerateInterpolator;

import com.example.clientapp.databinding.ActivityLoginBinding;

public class LoginActivity extends AppCompatActivity {

    private ActivityLoginBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityLoginBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
    }

    //Create miniature animations
    private void animateViews() {
        // Scale down the lottieAnimationView
        final int originalWidth = binding.lottieAnimationView.getWidth();
        final int originalHeight = binding.lottieAnimationView.getHeight();
        final int targetWidth = 900;
        final int targetHeight = 900;

        ValueAnimator widthAnimator = ValueAnimator.ofInt(originalWidth, targetWidth);
        ValueAnimator heightAnimator = ValueAnimator.ofInt(originalHeight, targetHeight);

        widthAnimator.addUpdateListener(animation -> {
            int newWidth = (int) animation.getAnimatedValue();
            ViewGroup.LayoutParams layoutParams = binding.lottieAnimationView.getLayoutParams();
            layoutParams.width = newWidth;
            binding.lottieAnimationView.setLayoutParams(layoutParams);
        });

        heightAnimator.addUpdateListener(animation -> {
            int newHeight = (int) animation.getAnimatedValue();
            ViewGroup.LayoutParams layoutParams = binding.lottieAnimationView.getLayoutParams();
            layoutParams.height = newHeight;
            binding.lottieAnimationView.setLayoutParams(layoutParams);
        });
        // Combine all animations
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.setDuration(1000); // Animation duration in milliseconds
        animatorSet.setInterpolator(new AccelerateDecelerateInterpolator());
        animatorSet.playTogether(widthAnimator, heightAnimator);

        // Start the animation
        animatorSet.start();
    }

}