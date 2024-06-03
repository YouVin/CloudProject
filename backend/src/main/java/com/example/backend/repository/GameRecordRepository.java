package com.example.backend.repository;

import com.example.backend.entity.GameRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  GameRecordRepository extends JpaRepository<GameRecord, Long> {
}
