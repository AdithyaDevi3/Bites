package com.bites.backend;

import com.bites.backend.model.Product;
import com.bites.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner seedData(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() == 0) {
                productRepository.save(new Product("Classic Burger", "Beef patty, lettuce, tomato, onion.", 8.99, "burgers"));
                productRepository.save(new Product("Margherita Pizza", "Tomato, mozzarella, basil.", 12.50, "pizza"));
                productRepository.save(new Product("Choco Shake", "Chocolate ice cream with whipped cream.", 5.75, "drinks"));
            }
        };
    }
}
